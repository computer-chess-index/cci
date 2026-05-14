# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3380<sub>(+8) | 3537<sub>(+5) | 3559<sub>(-2) |  |
| 6.0 | 2024-10-24 | 3372<sub>(+110) | 3532<sub>(+75) | 3561<sub>(+78) |  |
| 5.0 | 2024-05-23 | 3262<sub>(+new) | 3457<sub>(+new) | 3483<sub>(+new) |  |
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

Generated: 2026-05-14 06:28:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3262, 3372, 3380]
  line "STC (8.0+0.08s)" [3262, 3372, 3380]
  line "LTC (60.0+0.60s)" [3457, 3532, 3537]
  line "VLTC (2m24s+1.12s)" [3483, 3561, 3559]
  line "VLTC (2m24s+1.12s)" [3483, 3561, 3559]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3559 | 25 | 352 | 50% | 3561 | 88% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3537 | 25 | 368 | 50% | 3540 | 88% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3380 | 23 | 480 | 49% | 3383 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3561 | 12 | 1620 | 50% | 3560 | 85% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3532 | 12 | 1600 | 50% | 3532 | 82% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3372 | 13 | 1628 | 50% | 3375 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3483 | 32 | 236 | 51% | 3478 | 76% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3457 | 32 | 240 | 48% | 3468 | 78% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3262 | 27 | 408 | 53% | 3175 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |