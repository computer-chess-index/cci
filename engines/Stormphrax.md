# Engine: Stormphrax

Author: Ciekce

Home: https://github.com/Ciekce/Stormphrax

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3391<sub>(+46) | 3541<sub>(+31) | 3575<sub>(+27) |  |
| 7.0.0 | 2025-06-24 | 3345<sub>(+52) | 3510<sub>(+40) | 3548<sub>(+47) |  |
| 6.0.0 | 2024-10-29 | 3293<sub>(+99) | 3470<sub>(+76) | 3501<sub>(+69) |  |
| 5.0.0 | 2024-06-26 | 3194 | 3394 | 3432 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Stormphrax+<version>&body=###%20Engine%20name%0AStormphrax%0A%0A###%20Version%0A8.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-19 06:29:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0.0", "6.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "STC (8.0+0.08s)" [3194, 3293, 3345, 3391]
  line "STC (8.0+0.08s)" [3194, 3293, 3345, 3391]
  line "LTC (60.0+0.60s)" [3394, 3470, 3510, 3541]
  line "VLTC (2m24s+1.12s)" [3432, 3501, 3548, 3575]
  line "VLTC (2m24s+1.12s)" [3432, 3501, 3548, 3575]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3575 | 28 | 282 | 51% | 3565 | 89% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3541 | 27 | 308 | 50% | 3538 | 91% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3391 | 28 | 332 | 50% | 3394 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3548 | 18 | 722 | 51% | 3545 | 87% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3510 | 17 | 824 | 51% | 3506 | 87% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3345 | 17 | 930 | 51% | 3337 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3501 | 14 | 1184 | 50% | 3499 | 82% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3470 | 14 | 1228 | 50% | 3472 | 80% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3293 | 15 | 1188 | 50% | 3291 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3432 | 32 | 248 | 51% | 3425 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3394 | 27 | 340 | 54% | 3362 | 71% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3194 | 29 | 332 | 48% | 3210 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |