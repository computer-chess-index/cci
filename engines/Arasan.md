# Engine: Arasan

Author: Jon Dart

Home: https://github.com/jdart1/arasan-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.4 | 2026-04-15 | 3224<sub>(-7) | 3425<sub>(+9) | 3476<sub>(+17) |  |
| 25.3 | 2025-12-28 | 3231<sub>(+new) | 3416<sub>(+new) | 3459<sub>(+new) |  |
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

Generated: 2026-05-22 06:22:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.3", "25.4"]
  y-axis "Elo Rating" 3200 --> 3500
  line "STC (8.0+0.08s)" [3231, 3224]
  line "STC (8.0+0.08s)" [3231, 3224]
  line "LTC (60.0+0.60s)" [3416, 3425]
  line "VLTC (2m24s+1.12s)" [3459, 3476]
  line "VLTC (2m24s+1.12s)" [3459, 3476]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 26 | 328 | 50% | 3479 | 88% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3425 | 26 | 348 | 50% | 3424 | 79% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3224 | 27 | 372 | 51% | 3214 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3459 | 26 | 356 | 51% | 3453 | 82% |
| 25.3 | LTC <sub>(60.0+0.60s)</sub> | 3416 | 26 | 360 | 51% | 3409 | 78% |
| 25.3 | STC <sub>(8.0+0.08s)</sub> | 3231 | 24 | 488 | 52% | 3214 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |