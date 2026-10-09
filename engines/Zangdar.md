# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3313<sub>(+101) | 3474<sub>(+85) | 3510<sub>(+96) |  |
| 6.1.1 | 2026-02-25 | 3212<sub>(+56) | 3389<sub>(+6) | 3414<sub>(-31) |  |
| 6.1 | 2026-02-10 | 3156<sub>(+1) | 3383<sub>(+17) | 3445<sub>(+27) |  |
| 6 | 2026-02-07 | 3155<sub>(+12) | 3366<sub>(+6) | 3418<sub>(+15) |  |
| 5.00.02 | 2025-09-24 | 3143 | 3360 | 3403 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zangdar+<version>&body=###%20Engine%20name%0AZangdar%0A%0A###%20Version%0A7" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-09 04:44:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3600
  line "" [3143, 3155, 3156, 3212, 3313]
  line "STC (8.0+0.08s)" [3143, 3155, 3156, 3212, 3313]
  line "LTC (60.0+0.60s)" [3360, 3366, 3383, 3389, 3474]
  line "" [3403, 3418, 3445, 3414, 3510]
  line "VLTC (2m24s+1.12s)" [3403, 3418, 3445, 3414, 3510]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | VLTC <sub>(2m24s+1.12s)</sub> | 3510 | 35 | 196 | 49% | 3513 | 81% |
| 7 | LTC <sub>(60.0+0.60s)</sub> | 3474 | 36 | 186 | 51% | 3468 | 78% |
| 7 | STC <sub>(8.0+0.08s)</sub> | 3313 | 27 | 352 | 50% | 3310 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3414 | 25 | 394 | 50% | 3411 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3389 | 26 | 364 | 51% | 3384 | 70% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3212 | 25 | 444 | 51% | 3208 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3445 | 31 | 256 | 50% | 3443 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3383 | 27 | 332 | 49% | 3387 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3156 | 32 | 276 | 51% | 3150 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3418 | 36 | 192 | 50% | 3418 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3366 | 33 | 228 | 52% | 3356 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3155 | 34 | 244 | 49% | 3160 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3403 | 27 | 356 | 54% | 3366 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3360 | 31 | 272 | 51% | 3340 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3143 | 32 | 280 | 55% | 3086 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |