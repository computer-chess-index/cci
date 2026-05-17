# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3382<sub>(+7) | 3538<sub>(+4) | 3561<sub>(-2) |  |
| 6.0 | 2024-10-24 | 3375<sub>(+112) | 3534<sub>(+75) | 3563<sub>(+79) |  |
| 5.0 | 2024-05-23 | 3263<sub>(+new) | 3459<sub>(+new) | 3484<sub>(+new) |  |
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

Generated: 2026-05-17 06:28:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3263, 3375, 3382]
  line "STC (8.0+0.08s)" [3263, 3375, 3382]
  line "LTC (60.0+0.60s)" [3459, 3534, 3538]
  line "VLTC (2m24s+1.12s)" [3484, 3563, 3561]
  line "VLTC (2m24s+1.12s)" [3484, 3563, 3561]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3561 | 25 | 352 | 50% | 3563 | 88% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3538 | 25 | 368 | 50% | 3541 | 88% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3382 | 23 | 480 | 49% | 3384 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3563 | 12 | 1620 | 50% | 3561 | 85% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 12 | 1600 | 50% | 3533 | 82% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3375 | 13 | 1628 | 50% | 3376 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3484 | 32 | 236 | 51% | 3479 | 76% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3459 | 32 | 240 | 48% | 3471 | 78% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3263 | 27 | 408 | 53% | 3177 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |