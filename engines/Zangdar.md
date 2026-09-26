# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3312<sub>(+102) | 3471<sub>(+85) | 3507<sub>(+96) |  |
| 6.1.1 | 2026-02-25 | 3210<sub>(+56) | 3386<sub>(+6) | 3411<sub>(-32) |  |
| 6.1 | 2026-02-10 | 3154<sub>(+2) | 3380<sub>(+16) | 3443<sub>(+27) |  |
| 6 | 2026-02-07 | 3152<sub>(+11) | 3364<sub>(+5) | 3416<sub>(+15) |  |
| 5.00.02 | 2025-09-24 | 3141 | 3359 | 3401 |  |
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

Generated: 2026-09-26 04:43:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3600
  line "" [3141, 3152, 3154, 3210, 3312]
  line "STC (8.0+0.08s)" [3141, 3152, 3154, 3210, 3312]
  line "LTC (60.0+0.60s)" [3359, 3364, 3380, 3386, 3471]
  line "" [3401, 3416, 3443, 3411, 3507]
  line "VLTC (2m24s+1.12s)" [3401, 3416, 3443, 3411, 3507]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | VLTC <sub>(2m24s+1.12s)</sub> | 3507 | 35 | 192 | 49% | 3510 | 80% |
| 7 | LTC <sub>(60.0+0.60s)</sub> | 3471 | 36 | 186 | 51% | 3467 | 78% |
| 7 | STC <sub>(8.0+0.08s)</sub> | 3312 | 27 | 344 | 50% | 3310 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3411 | 25 | 394 | 50% | 3410 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3386 | 26 | 364 | 51% | 3382 | 70% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3210 | 25 | 444 | 51% | 3205 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3443 | 31 | 256 | 50% | 3440 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3380 | 27 | 332 | 49% | 3384 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3154 | 32 | 276 | 51% | 3148 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3416 | 36 | 192 | 50% | 3416 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3364 | 33 | 228 | 52% | 3353 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3152 | 34 | 244 | 49% | 3158 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3401 | 27 | 356 | 54% | 3364 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3359 | 31 | 272 | 51% | 3337 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3141 | 32 | 280 | 55% | 3083 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |