# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-04-25 | 3206<sub>(+28) | 3414<sub>(+54) | 3474<sub>(+45) |  |
| 5.0.0 | 2026-02-13 | 3178<sub>(+61) | 3360<sub>(+43) | 3429<sub>(+88) |  |
| 4.0.0 | 2025-12-29 | 3117<sub>(+93) | 3317<sub>(+62) | 3341<sub>(+50) |  |
| 3.0.0 | 2025-10-20 | 3024<sub>(+new) | 3255<sub>(+new) | 3291<sub>(+new) |  |
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

Generated: 2026-05-18 06:26:02

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3024, 3117, 3178, 3206]
  line "STC (8.0+0.08s)" [3024, 3117, 3178, 3206]
  line "LTC (60.0+0.60s)" [3255, 3317, 3360, 3414]
  line "VLTC (2m24s+1.12s)" [3291, 3341, 3429, 3474]
  line "VLTC (2m24s+1.12s)" [3291, 3341, 3429, 3474]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3474 | 28 | 314 | 50% | 3474 | 78% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3414 | 28 | 310 | 50% | 3410 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3206 | 31 | 274 | 50% | 3209 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3429 | 24 | 414 | 50% | 3430 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3360 | 26 | 382 | 51% | 3352 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3178 | 25 | 444 | 51% | 3174 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3341 | 30 | 276 | 51% | 3332 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3317 | 31 | 268 | 48% | 3332 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3117 | 33 | 252 | 51% | 3089 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3291 | 37 | 184 | 50% | 3293 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3255 | 32 | 252 | 48% | 3270 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 3024 | 34 | 240 | 48% | 3036 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |