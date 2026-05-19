# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-04-25 | 3166<sub>(+30) | 3372<sub>(+54) | 3432<sub>(+45) |  |
| 5.0.0 | 2026-02-13 | 3136<sub>(+61) | 3318<sub>(+43) | 3387<sub>(+88) |  |
| 4.0.0 | 2025-12-29 | 3075<sub>(+93) | 3275<sub>(+62) | 3299<sub>(+50) |  |
| 3.0.0 | 2025-10-20 | 2982<sub>(+new) | 3213<sub>(+new) | 3249<sub>(+new) |  |
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

Generated: 2026-05-19 06:26:40

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "STC (8.0+0.08s)" [2982, 3075, 3136, 3166]
  line "STC (8.0+0.08s)" [2982, 3075, 3136, 3166]
  line "LTC (60.0+0.60s)" [3213, 3275, 3318, 3372]
  line "VLTC (2m24s+1.12s)" [3249, 3299, 3387, 3432]
  line "VLTC (2m24s+1.12s)" [3249, 3299, 3387, 3432]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3432 | 28 | 318 | 50% | 3432 | 78% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3372 | 28 | 310 | 50% | 3368 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3166 | 31 | 278 | 50% | 3167 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3387 | 24 | 414 | 50% | 3389 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3318 | 26 | 382 | 51% | 3310 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3136 | 25 | 444 | 51% | 3132 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3299 | 30 | 276 | 51% | 3290 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3275 | 31 | 268 | 48% | 3290 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3075 | 33 | 252 | 51% | 3047 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3249 | 37 | 184 | 50% | 3251 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3213 | 32 | 252 | 48% | 3228 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2982 | 34 | 240 | 48% | 2994 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |