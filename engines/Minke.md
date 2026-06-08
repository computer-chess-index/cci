# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-04-25 | 3150<sub>(+33) | 3351<sub>(+52) | 3411<sub>(+43) |  |
| 5.0.0 | 2026-02-13 | 3117<sub>(+61) | 3299<sub>(+43) | 3368<sub>(+87) |  |
| 4.0.0 | 2025-12-29 | 3056<sub>(+93) | 3256<sub>(+62) | 3281<sub>(+50) |  |
| 3.0.0 | 2025-10-20 | 2963<sub>(+new) | 3194<sub>(+new) | 3231<sub>(+new) |  |
| 2.0.0 | 2025-09-14 |  |  |  |  |
| 1.0.0 | 2025-08-26 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Minke+<version>&body=###%20Engine%20name%0AMinke%0A%0A###%20Version%0A6.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-08 06:26:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "STC (8.0+0.08s)" [2963, 3056, 3117, 3150]
  line "STC (8.0+0.08s)" [2963, 3056, 3117, 3150]
  line "LTC (60.0+0.60s)" [3194, 3256, 3299, 3351]
  line "VLTC (2m24s+1.12s)" [3231, 3281, 3368, 3411]
  line "VLTC (2m24s+1.12s)" [3231, 3281, 3368, 3411]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3411 | 27 | 338 | 50% | 3411 | 78% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3351 | 28 | 326 | 50% | 3349 | 70% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3150 | 30 | 306 | 50% | 3148 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3368 | 24 | 414 | 50% | 3368 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3299 | 26 | 382 | 51% | 3291 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3117 | 25 | 444 | 51% | 3113 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3281 | 30 | 276 | 51% | 3271 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3256 | 31 | 268 | 48% | 3271 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3056 | 33 | 252 | 51% | 3028 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3231 | 37 | 184 | 50% | 3232 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3194 | 32 | 252 | 48% | 3209 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2963 | 34 | 240 | 48% | 2974 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |