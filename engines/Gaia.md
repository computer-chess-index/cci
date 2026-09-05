# Engine: Gaia

Author: Jean-Francois Romang, David Rabel

Home: https://github.com/jromang/gaiachess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.6 | 2026-08-29 | 3275<sub>(+1) | 3465<sub>(+6) | 3519<sub>(+17) |  |
| 4.2.5 | 2026-08-24 | 3274<sub>(+20) | 3459<sub>(+22) | 3502<sub>(+7) |  |
| 4.2.4 | 2026-08-23 | 3254<sub>(+3) | 3437<sub>(+4) | 3495<sub>(+5) |  |
| 4.2.4 | 2026-08-23 | 3251<sub>(+10) | 3433<sub>(-26) | 3490<sub>(-4) |  |
| 4.2.3 | 2026-08-21 | 3241<sub>(-8) | 3459<sub>(+12) | 3494<sub>(+19) |  |
| 4.2.2 | 2026-08-13 | 3249<sub>(+52) | 3447<sub>(-2) | 3475<sub>(-30) |  |
| 4.2.1 | 2026-08-09 | 3197<sub>(+new) | 3449<sub>(+new) | 3505<sub>(+new) |  |
| 4.1.3 | 2026-02-26 |  |  |  |  |
| 4.1.2 | 2026-02-24 |  |  |  |  |
| 4.1.1 | 2026-02-24 |  |  |  |  |
| 4.1.0 | 2026-02-22 |  |  |  | Skipped for 4.1.1 |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gaia+<version>&body=###%20Engine%20name%0AGaia%0A%0A###%20Version%0A4.2.6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-05 04:35:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2.1", "4.2.2", "4.2.3", "4.2.4", "4.2.4", "4.2.5", "4.2.6"]
  y-axis "Elo Rating" 3100 --> 3600
  line "" [3197, 3249, 3241, 3254, 3251, 3274, 3275]
  line "STC (8.0+0.08s)" [3197, 3249, 3241, 3254, 3251, 3274, 3275]
  line "LTC (60.0+0.60s)" [3449, 3447, 3459, 3437, 3433, 3459, 3465]
  line "" [3505, 3475, 3494, 3495, 3490, 3502, 3519]
  line "VLTC (2m24s+1.12s)" [3505, 3475, 3494, 3495, 3490, 3502, 3519]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3519 | 35 | 192 | 50% | 3518 | 83% |
| 4.2.6 | LTC <sub>(60.0+0.60s)</sub> | 3465 | 32 | 238 | 51% | 3459 | 80% |
| 4.2.6 | STC <sub>(8.0+0.08s)</sub> | 3275 | 33 | 232 | 50% | 3274 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 28 | 300 | 51% | 3497 | 79% |
| 4.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3459 | 28 | 306 | 51% | 3451 | 76% |
| 4.2.5 | STC <sub>(8.0+0.08s)</sub> | 3274 | 33 | 236 | 52% | 3254 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3495 | 31 | 248 | 49% | 3502 | 79% |
| 4.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3490 | 31 | 244 | 49% | 3498 | 79% |
| 4.2.4 | LTC <sub>(60.0+0.60s)</sub> | 3433 | 33 | 222 | 51% | 3430 | 78% |
| 4.2.4 | LTC <sub>(60.0+0.60s)</sub> | 3437 | 33 | 226 | 51% | 3433 | 77% |
| 4.2.4 | STC <sub>(8.0+0.08s)</sub> | 3251 | 33 | 234 | 47% | 3270 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.4 | STC <sub>(8.0+0.08s)</sub> | 3254 | 33 | 238 | 47% | 3272 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3494 | 36 | 190 | 51% | 3488 | 77% |
| 4.2.3 | LTC <sub>(60.0+0.60s)</sub> | 3459 | 30 | 266 | 48% | 3472 | 80% |
| 4.2.3 | STC <sub>(8.0+0.08s)</sub> | 3241 | 35 | 212 | 49% | 3252 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3475 | 32 | 240 | 50% | 3476 | 79% |
| 4.2.2 | LTC <sub>(60.0+0.60s)</sub> | 3447 | 32 | 236 | 50% | 3448 | 77% |
| 4.2.2 | STC <sub>(8.0+0.08s)</sub> | 3249 | 33 | 248 | 51% | 3247 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3505 | 56 | 88 | 59% | 3345 | 69% |
| 4.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3449 | 47 | 128 | 59% | 3278 | 63% |
| 4.2.1 | STC <sub>(8.0+0.08s)</sub> | 3197 | 45 | 152 | 56% | 3074 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |