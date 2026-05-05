# Engine: Arasan

Author: Jon Dart

Home: https://github.com/jdart1/arasan-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.4 | 2026-04-15 | 3281<sub>(-8) | 3487<sub>(+13) | 3537<sub>(+19) |  |
| 25.3 | 2025-12-28 | 3289<sub>(+new) | 3474<sub>(+new) | 3518<sub>(+new) |  |
| 25.2 | 2025-07-15 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arasan+<version>&body=###%20Engine%20name%0AArasan%0A%0A###%20Version%0A25.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-05 06:22:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.3", "25.4"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3289, 3281]
  line "STC (8.0+0.08s)" [3289, 3281]
  line "LTC (60.0+0.60s)" [3474, 3487]
  line "VLTC (2m24s+1.12s)" [3518, 3537]
  line "VLTC (2m24s+1.12s)" [3518, 3537]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3537 | 28 | 282 | 50% | 3538 | 88% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3487 | 27 | 320 | 50% | 3484 | 80% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3281 | 27 | 348 | 51% | 3271 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3518 | 26 | 356 | 51% | 3513 | 82% |
| 25.3 | LTC <sub>(60.0+0.60s)</sub> | 3474 | 26 | 360 | 51% | 3467 | 78% |
| 25.3 | STC <sub>(8.0+0.08s)</sub> | 3289 | 24 | 488 | 52% | 3272 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |