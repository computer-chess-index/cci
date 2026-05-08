# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-04-25 | 3209<sub>(+28) | 3416<sub>(+53) | 3476<sub>(+44) |  |
| 5.0.0 | 2026-02-13 | 3181<sub>(+61) | 3363<sub>(+43) | 3432<sub>(+88) |  |
| 4.0.0 | 2025-12-29 | 3120<sub>(+93) | 3320<sub>(+64) | 3344<sub>(+51) |  |
| 3.0.0 | 2025-10-20 | 3027<sub>(+new) | 3256<sub>(+new) | 3293<sub>(+new) |  |
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

Generated: 2026-05-08 06:25:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3027, 3120, 3181, 3209]
  line "STC (8.0+0.08s)" [3027, 3120, 3181, 3209]
  line "LTC (60.0+0.60s)" [3256, 3320, 3363, 3416]
  line "VLTC (2m24s+1.12s)" [3293, 3344, 3432, 3476]
  line "VLTC (2m24s+1.12s)" [3293, 3344, 3432, 3476]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 28 | 310 | 50% | 3475 | 78% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3416 | 28 | 310 | 50% | 3411 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3209 | 32 | 270 | 50% | 3212 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3432 | 24 | 414 | 50% | 3432 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3363 | 26 | 382 | 51% | 3355 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3181 | 25 | 444 | 51% | 3177 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3344 | 30 | 276 | 51% | 3335 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3320 | 31 | 268 | 48% | 3335 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3120 | 33 | 252 | 51% | 3092 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3293 | 37 | 184 | 50% | 3294 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3256 | 32 | 252 | 48% | 3272 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 3027 | 34 | 240 | 48% | 3038 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |