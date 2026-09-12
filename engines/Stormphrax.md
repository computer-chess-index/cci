# Engine: Stormphrax

Author: Ciekce

Home: https://github.com/Ciekce/Stormphrax

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3403<sub>(+50) | 3549<sub>(+28) | 3580<sub>(+21) |  |
| 7.0.0 | 2025-06-24 | 3353<sub>(+51) | 3521<sub>(+41) | 3559<sub>(+49) |  |
| 6.0.0 | 2024-10-29 | 3302<sub>(+98) | 3480<sub>(+77) | 3510<sub>(+69) |  |
| 5.0.0 | 2024-06-26 | 3204 | 3403 | 3441 |  |
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

Generated: 2026-09-12 04:42:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0.0", "6.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3204, 3302, 3353, 3403]
  line "STC (8.0+0.08s)" [3204, 3302, 3353, 3403]
  line "LTC (60.0+0.60s)" [3403, 3480, 3521, 3549]
  line "" [3441, 3510, 3559, 3580]
  line "VLTC (2m24s+1.12s)" [3441, 3510, 3559, 3580]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3580 | 27 | 306 | 51% | 3575 | 89% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3549 | 25 | 360 | 50% | 3548 | 91% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3403 | 26 | 380 | 50% | 3403 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3559 | 18 | 722 | 51% | 3555 | 87% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3521 | 17 | 824 | 51% | 3517 | 87% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3353 | 17 | 930 | 51% | 3347 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3510 | 14 | 1184 | 50% | 3509 | 82% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3480 | 14 | 1228 | 50% | 3482 | 80% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3302 | 15 | 1188 | 50% | 3299 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3441 | 32 | 248 | 51% | 3434 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3403 | 27 | 340 | 54% | 3371 | 71% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3204 | 29 | 332 | 48% | 3220 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |