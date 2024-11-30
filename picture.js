let segmenter;

if ("Intl" in self && "Segmenter" in Intl) {
	segmenter = new Intl.Segmenter("km", { granularity: "word" });
}

if ("FontFace" in self) {
	const fontFace = new FontFace(
		"InterKhmer",
		"url(/InterKhmerLooped[wght].woff2) format('woff2')",
	);

	fontFace.load();
	self.fonts.add(fontFace);
}

export function createPictureCard(
	icon,
	{
		word = "word",
		definition = "definition",
		pronunciation = "pronunciation",
		url = "url",
		pos = "pos",
	} = {},
) {
	const canvas = new OffscreenCanvas(1080, 1080);
	const ctx = canvas.getContext("2d");

	drawBackground(canvas, ctx);
	if (icon) {
		drawIcon(canvas, ctx, icon);
	}
	drawTitle(canvas, ctx);
	drawSubtitle(canvas, ctx);
	drawDomain(canvas, ctx, url);
	drawDivider(canvas, ctx);
	drawWord(canvas, ctx, word, pos);
	drawPronunciation(canvas, ctx, pronunciation);
	drawDefinition(canvas, ctx, definition);
	return canvas;
}

function drawBackground(canvas, ctx) {
	ctx.textBaseline = "top";
	ctx.fillStyle = "#1A2130";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawIcon(canvas, ctx, icon) {
	const iconSize = 80;
	ctx.drawImage(icon, 44, 44, iconSize, iconSize);
}

function drawTitle(canvas, ctx) {
	const text = "វចនានុក្រមខ្មែរ";
	ctx.font = "600 28pt InterKhmer, sans-serif";
	ctx.fillStyle = "white";
	ctx.fillText(text, 44 + 72 + 44, 44);
}

function drawSubtitle(canvas, ctx) {
	const text = "រហ័ស និងងាយស្រួលប្រើប្រាស់";
	ctx.font = "500 18pt InterKhmer, sans-serif";
	ctx.fillStyle = rgba(255, 255, 255, 0.6);
	ctx.fillText(text, 44 + 72 + 44, 44 + 50);
}

function drawDomain(canvas, ctx, text) {
	ctx.fillStyle = rgba(255, 255, 255, 0.8);
	ctx.font = "500 18pt InterKhmer, sans-serif";
	const m = ctx.measureText(text);
	ctx.fillText(text, canvas.width - m.width - 44, 44);
}

function drawDivider(canvas, ctx) {
	const y = 44 + 72 + 44;
	ctx.fillStyle = rgba(0, 0, 0, 0.1);
	ctx.fillRect(0, y, canvas.width, canvas.height);

	ctx.fillStyle = rgba(255, 255, 255, 0.1);
	ctx.fillRect(0, y, canvas.width, 2);
}

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @returns {string}
 */
function rgba(r, g, b, a) {
	if (a == null) return `rgb(${r}, ${g}, ${b})`;
	return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function drawWord(canvas, ctx, text, text1) {
	const y = 44 + 72 + 44 + 44;

	ctx.font = "600 28pt InterKhmer, sans-serif";
	const m = ctx.measureText(text);
	ctx.fillStyle = "white";
	ctx.fillText(text, 44, y);

	const text1OffsetX = 10;

	if (text1) {
		ctx.font = "500 24pt InterKhmer, sans-serif";
		const m1 = ctx.measureText(text1);

		ctx.fillStyle = rgba(255, 255, 255, 0.1);
		ctx.fillRect(text1OffsetX + m.width + 44, y - 10, m1.width + 20, 50);

		ctx.fillStyle = rgba(255, 255, 255, 0.6);
		ctx.fillText(text1, text1OffsetX + m.width + 44 + 10, y + 2);
	}
}

function drawPronunciation(canvas, ctx, text) {
	ctx.save();
	const y = 44 + 72 + 44 + 44;

	ctx.font = "500 20pt InterKhmer, sans-serif";
	const m = ctx.measureText(text);

	ctx.fillStyle = rgba(255, 255, 255, 0.1);
	ctx.fillRect(canvas.width - m.width - 44 - 10 - 22, y - 8, m.width + 20, 40);

	ctx.fillStyle = rgba(255, 255, 255, 0.8);
	ctx.fillText(text, canvas.width - m.width - 44 - 22, y);
	ctx.restore();
}

function drawDefinition(canvas, ctx, text) {
	const s = segmenter.segment(text);
	const segments = [...s].map((item) => item.segment);
	const y = 44 + 72 + 44 + 44 + 56;

	function render(draw, drawExample) {
		ctx.font = "400 20pt InterKhmer, sans-serif";

		let offsetX = 0;
		let offsetY = 0;

		ctx.fillStyle = rgba(255, 255, 255, 0.9);
		for (const segment of segments) {
			const metrics = ctx.measureText(segment);

			if (
				segment === "\n" ||
				offsetX + metrics.width >= canvas.width - 44 * 2
			) {
				offsetX = 0;
				offsetY += 40;
			}

			if (segment === "\n") {
				ctx.fillStyle = rgba(255, 255, 255, 0.6);
				ctx.font = "italic 400 17pt InterKhmer, sans-serif";
				offsetY += 10;
				if (!drawExample) {
					break;
				}
			}

			if (offsetX === 0 && segment.trim().length === 0) continue;
			if (draw) {
				ctx.fillText(segment, 44 + offsetX, y + offsetY);
			}
			offsetX += metrics.width;
		}

		return { offsetY };
	}

	const { offsetY } = render(false, true);
	if (offsetY + y > canvas.height - 44) {
		render(true, false);
		return;
	}

	render(true, true);
}
