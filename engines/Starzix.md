# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3375<sub>(+7) | 3532<sub>(+4) | 3555<sub>(-1) |  |
| 6.0 | 2024-10-24 | 3368<sub>(+112) | 3528<sub>(+75) | 3556<sub>(+77) |  |
| 5.0 | 2024-05-23 | 3256<sub>(+new) | 3453<sub>(+new) | 3479<sub>(+new) |  |
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

Generated: 2026-05-03 08:22:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3256, 3368, 3375]
  line "STC (8.0+0.08s)" [3256, 3368, 3375]
  line "LTC (60.0+0.60s)" [3453, 3528, 3532]
  line "VLTC (2m24s+1.12s)" [3479, 3556, 3555]
  line "VLTC (2m24s+1.12s)" [3479, 3556, 3555]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3555 | 25 | 352 | 50% | 3557 | 88% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3532 | 25 | 364 | 50% | 3536 | 88% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3375 | 23 | 476 | 49% | 3379 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 12 | 1620 | 50% | 3556 | 85% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3528 | 12 | 1600 | 50% | 3526 | 82% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3368 | 13 | 1628 | 50% | 3370 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3479 | 32 | 236 | 51% | 3474 | 76% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3453 | 32 | 240 | 48% | 3464 | 78% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3256 | 27 | 408 | 53% | 3171 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |