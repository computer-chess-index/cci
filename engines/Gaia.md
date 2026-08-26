# Engine: Gaia

Author: Jean-Francois Romang, David Rabel

Home: https://github.com/jromang/gaiachess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.5 | 2026-08-24 | 3264<sub>(+13) | 3457<sub>(+24) | 3505<sub>(+15) |  |
| 4.2.4 | 2026-08-23 | 3251<sub>(-1) | 3433<sub>(-1) | 3490<sub>(-2) |  |
| 4.2.4 | 2026-08-23 | 3252<sub>(+12) | 3434<sub>(-22) | 3492<sub>(+1) |  |
| 4.2.3 | 2026-08-21 | 3240<sub>(-7) | 3456<sub>(+12) | 3491<sub>(+19) |  |
| 4.2.2 | 2026-08-13 | 3247<sub>(+52) | 3444<sub>(-3) | 3472<sub>(-30) |  |
| 4.2.1 | 2026-08-09 | 3195<sub>(+new) | 3447<sub>(+new) | 3502<sub>(+new) |  |
| 4.1.3 | 2026-02-26 |  |  |  |  |
| 4.1.2 | 2026-02-24 |  |  |  |  |
| 4.1.1 | 2026-02-24 |  |  |  |  |
| 4.1.0 | 2026-02-22 |  |  |  | Skipped for 4.1.1 |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gaia+<version>&body=###%20Engine%20name%0AGaia%0A%0A###%20Version%0A4.2.5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-26 06:25:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2.1", "4.2.2", "4.2.3", "4.2.4", "4.2.4", "4.2.5"]
  y-axis "Elo Rating" 3100 --> 3600
  line "STC (8.0+0.08s)" [3195, 3247, 3240, 3251, 3252, 3264]
  line "STC (8.0+0.08s)" [3195, 3247, 3240, 3251, 3252, 3264]
  line "LTC (60.0+0.60s)" [3447, 3444, 3456, 3433, 3434, 3457]
  line "VLTC (2m24s+1.12s)" [3502, 3472, 3491, 3490, 3492, 3505]
  line "VLTC (2m24s+1.12s)" [3502, 3472, 3491, 3490, 3492, 3505]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3505 | 30 | 270 | 51% | 3495 | 79% |
| 4.2.5 | LTC <sub>(60.0+0.60s)</sub> | 3457 | 29 | 294 | 51% | 3448 | 76% |
| 4.2.5 | STC <sub>(8.0+0.08s)</sub> | 3264 | 34 | 224 | 51% | 3259 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3490 | 31 | 244 | 49% | 3498 | 79% |
| 4.2.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3492 | 31 | 248 | 49% | 3499 | 79% |
| 4.2.4 | LTC <sub>(60.0+0.60s)</sub> | 3433 | 33 | 222 | 51% | 3430 | 78% |
| 4.2.4 | LTC <sub>(60.0+0.60s)</sub> | 3434 | 33 | 226 | 51% | 3430 | 77% |
| 4.2.4 | STC <sub>(8.0+0.08s)</sub> | 3251 | 33 | 234 | 47% | 3270 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.4 | STC <sub>(8.0+0.08s)</sub> | 3252 | 33 | 238 | 47% | 3270 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3491 | 36 | 190 | 51% | 3486 | 77% |
| 4.2.3 | LTC <sub>(60.0+0.60s)</sub> | 3456 | 30 | 266 | 48% | 3470 | 80% |
| 4.2.3 | STC <sub>(8.0+0.08s)</sub> | 3240 | 35 | 212 | 49% | 3251 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3472 | 32 | 240 | 50% | 3474 | 79% |
| 4.2.2 | LTC <sub>(60.0+0.60s)</sub> | 3444 | 32 | 236 | 50% | 3445 | 77% |
| 4.2.2 | STC <sub>(8.0+0.08s)</sub> | 3247 | 33 | 248 | 51% | 3244 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 56 | 88 | 59% | 3344 | 69% |
| 4.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3447 | 47 | 128 | 59% | 3275 | 63% |
| 4.2.1 | STC <sub>(8.0+0.08s)</sub> | 3195 | 45 | 152 | 56% | 3074 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |