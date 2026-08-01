# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-04-25 | 3150<sub>(+27) | 3360<sub>(+54) | 3420<sub>(+44) |  |
| 5.0.0 | 2026-02-13 | 3123<sub>(+61) | 3306<sub>(+43) | 3376<sub>(+89) |  |
| 4.0.0 | 2025-12-29 | 3062<sub>(+93) | 3263<sub>(+63) | 3287<sub>(+51) |  |
| 3.0.0 | 2025-10-20 | 2969<sub>(+new) | 3200<sub>(+new) | 3236<sub>(+new) |  |
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

Generated: 2026-08-01 06:27:02

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "STC (8.0+0.08s)" [2969, 3062, 3123, 3150]
  line "STC (8.0+0.08s)" [2969, 3062, 3123, 3150]
  line "LTC (60.0+0.60s)" [3200, 3263, 3306, 3360]
  line "VLTC (2m24s+1.12s)" [3236, 3287, 3376, 3420]
  line "VLTC (2m24s+1.12s)" [3236, 3287, 3376, 3420]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3420 | 24 | 422 | 50% | 3420 | 76% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3360 | 25 | 406 | 50% | 3359 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3150 | 28 | 354 | 49% | 3158 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3376 | 24 | 414 | 50% | 3376 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3306 | 26 | 382 | 51% | 3299 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3123 | 25 | 444 | 51% | 3119 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3287 | 30 | 276 | 51% | 3278 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3263 | 31 | 268 | 48% | 3278 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3062 | 33 | 252 | 51% | 3033 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3236 | 37 | 184 | 50% | 3237 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3200 | 32 | 252 | 48% | 3216 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2969 | 34 | 240 | 48% | 2981 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |