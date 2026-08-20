# Engine: Tarnished

Author: Anik Patel

Home: https://github.com/Bobingstern/Tarnished

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0 | 2026-06-10 | 3348<sub>(-11) | 3529<sub>(+7) | 3555<sub>(+9) |  |
| 5.0 | 2026-02-07 | 3359<sub>(+111) | 3522<sub>(+94) | 3546<sub>(+71) |  |
| 4.0 | 2025-08-23 | 3248 | 3428 | 3475 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tarnished+<version>&body=###%20Engine%20name%0ATarnished%0A%0A###%20Version%0A6.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-20 06:30:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0", "5.0", "6.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3248, 3359, 3348]
  line "STC (8.0+0.08s)" [3248, 3359, 3348]
  line "LTC (60.0+0.60s)" [3428, 3522, 3529]
  line "VLTC (2m24s+1.12s)" [3475, 3546, 3555]
  line "VLTC (2m24s+1.12s)" [3475, 3546, 3555]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3555 | 26 | 344 | 51% | 3548 | 86% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 25 | 358 | 49% | 3536 | 85% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3348 | 25 | 396 | 49% | 3355 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3546 | 23 | 442 | 50% | 3545 | 86% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3522 | 23 | 442 | 51% | 3515 | 85% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3359 | 23 | 474 | 50% | 3357 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3475 | 29 | 282 | 51% | 3467 | 78% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3428 | 34 | 220 | 51% | 3410 | 75% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3248 | 29 | 316 | 54% | 3212 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |