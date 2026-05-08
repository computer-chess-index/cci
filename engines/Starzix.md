# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3378<sub>(+8) | 3534<sub>(+5) | 3556<sub>(-3) |  |
| 6.0 | 2024-10-24 | 3370<sub>(+111) | 3529<sub>(+74) | 3559<sub>(+79) |  |
| 5.0 | 2024-05-23 | 3259<sub>(+new) | 3455<sub>(+new) | 3480<sub>(+new) |  |
| 4.0 | 2024-01-22 |  |  |  |  |
| 3.0 | 2023-11-25 |  |  |  |  |
| 2.1 | 2023-10-22 |  |  |  |  |
| 1.0 | 2023-10-03 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Starzix+<version>&body=###%20Engine%20name%0AStarzix%0A%0A###%20Version%0A6.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-08 06:28:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3259, 3370, 3378]
  line "STC (8.0+0.08s)" [3259, 3370, 3378]
  line "LTC (60.0+0.60s)" [3455, 3529, 3534]
  line "VLTC (2m24s+1.12s)" [3480, 3559, 3556]
  line "VLTC (2m24s+1.12s)" [3480, 3559, 3556]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 25 | 352 | 50% | 3559 | 88% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 25 | 368 | 50% | 3537 | 88% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3378 | 23 | 480 | 49% | 3380 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3559 | 12 | 1620 | 50% | 3557 | 85% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 12 | 1600 | 50% | 3529 | 82% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3370 | 13 | 1628 | 50% | 3372 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3480 | 32 | 236 | 51% | 3475 | 76% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3455 | 32 | 240 | 48% | 3467 | 78% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3259 | 27 | 408 | 53% | 3173 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |