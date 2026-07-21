# Engine: Justbot

Author: Hassan Fakih

Home: https://github.com/HasanFakih21/JustBot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.0 | 2026-07-19 | 3033<sub>(+471) | 3252<sub>(+375) | 3275<sub>(+331) |  |
| 0.2.0 | 2026-06-24 | 2562<sub>(+555) | 2877<sub>(+575) | 2944<sub>(+546) |  |
| 0.1.0 | 2026-06-09 | 2007 | 2302 | 2398 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Justbot+<version>&body=###%20Engine%20name%0AJustbot%0A%0A###%20Version%0A0.3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-21 06:26:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.0", "0.3.0"]
  y-axis "Elo Rating" 2000 --> 3300
  line "STC (8.0+0.08s)" [2007, 2562, 3033]
  line "STC (8.0+0.08s)" [2007, 2562, 3033]
  line "LTC (60.0+0.60s)" [2302, 2877, 3252]
  line "VLTC (2m24s+1.12s)" [2398, 2944, 3275]
  line "VLTC (2m24s+1.12s)" [2398, 2944, 3275]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3275 | 47 | 120 | 53% | 3248 | 61% |
| 0.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3252 | 44 | 136 | 53% | 3224 | 63% |
| 0.3.0 | STC <sub>(8.0+0.08s)</sub> | 3033 | 42 | 156 | 50% | 3025 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2944 | 37 | 212 | 50% | 2934 | 50% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2877 | 32 | 296 | 47% | 2894 | 42% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 2562 | 36 | 252 | 46% | 2601 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2398 | 36 | 278 | 49% | 2419 | 22% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2302 | 35 | 284 | 49% | 2310 | 26% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 2007 | 37 | 266 | 48% | 2022 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |