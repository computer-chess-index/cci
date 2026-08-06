# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-04-25 | 3146<sub>(+25) | 3359<sub>(+54) | 3418<sub>(+43) |  |
| 5.0.0 | 2026-02-13 | 3121<sub>(+61) | 3305<sub>(+43) | 3375<sub>(+89) |  |
| 4.0.0 | 2025-12-29 | 3060<sub>(+93) | 3262<sub>(+64) | 3286<sub>(+50) |  |
| 3.0.0 | 2025-10-20 | 2967 | 3198 | 3236 |  |
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

Generated: 2026-08-06 08:28:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "STC (8.0+0.08s)" [2967, 3060, 3121, 3146]
  line "STC (8.0+0.08s)" [2967, 3060, 3121, 3146]
  line "LTC (60.0+0.60s)" [3198, 3262, 3305, 3359]
  line "VLTC (2m24s+1.12s)" [3236, 3286, 3375, 3418]
  line "VLTC (2m24s+1.12s)" [3236, 3286, 3375, 3418]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3418 | 24 | 422 | 50% | 3418 | 76% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3359 | 25 | 410 | 50% | 3357 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3146 | 27 | 362 | 49% | 3154 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3375 | 24 | 414 | 50% | 3375 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3305 | 26 | 382 | 51% | 3297 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3121 | 25 | 444 | 51% | 3117 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3286 | 30 | 276 | 51% | 3276 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3262 | 31 | 268 | 48% | 3276 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3060 | 33 | 252 | 51% | 3032 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3236 | 37 | 184 | 50% | 3236 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3198 | 32 | 252 | 48% | 3214 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2967 | 34 | 240 | 48% | 2979 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |