# Engine: Halogen

Author: Kieren Pearson

Home: https://github.com/KierenP/Halogen

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3367<sub>(+76) | 3530<sub>(+54) | 3556<sub>(+23) |  |
| 15.0.0 | 2025-09-01 | 3291 | 3476 | 3533 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Halogen+<version>&body=###%20Engine%20name%0AHalogen%0A%0A###%20Version%0A16.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-14 04:38:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["15.0.0", "16.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3291, 3367]
  line "STC (8.0+0.08s)" [3291, 3367]
  line "LTC (60.0+0.60s)" [3476, 3530]
  line "" [3533, 3556]
  line "VLTC (2m24s+1.12s)" [3533, 3556]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 21 | 530 | 50% | 3556 | 88% |
| 16.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3530 | 21 | 540 | 50% | 3530 | 86% |
| 16.0.0 | STC <sub>(8.0+0.08s)</sub> | 3367 | 20 | 634 | 50% | 3370 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3533 | 27 | 324 | 52% | 3515 | 83% |
| 15.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3476 | 30 | 276 | 52% | 3457 | 79% |
| 15.0.0 | STC <sub>(8.0+0.08s)</sub> | 3291 | 32 | 256 | 54% | 3252 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |