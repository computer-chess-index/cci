# Engine: Arasan

Author: Jon Dart

Home: https://github.com/jdart1/arasan-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.4 | 2026-04-15 | 3285<sub>(-9) | 3490<sub>(+11) | 3541<sub>(+19) |  |
| 25.3 | 2025-12-28 | 3294<sub>(+new) | 3479<sub>(+new) | 3522<sub>(+new) |  |
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

Generated: 2026-05-16 06:22:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.3", "25.4"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3294, 3285]
  line "STC (8.0+0.08s)" [3294, 3285]
  line "LTC (60.0+0.60s)" [3479, 3490]
  line "VLTC (2m24s+1.12s)" [3522, 3541]
  line "VLTC (2m24s+1.12s)" [3522, 3541]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 28 | 296 | 50% | 3542 | 88% |
| 25.4 | LTC <sub>(60.0+0.60s)</sub> | 3490 | 27 | 328 | 50% | 3488 | 80% |
| 25.4 | STC <sub>(8.0+0.08s)</sub> | 3285 | 27 | 360 | 51% | 3278 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3522 | 26 | 356 | 51% | 3517 | 82% |
| 25.3 | LTC <sub>(60.0+0.60s)</sub> | 3479 | 26 | 360 | 51% | 3472 | 78% |
| 25.3 | STC <sub>(8.0+0.08s)</sub> | 3294 | 24 | 488 | 52% | 3276 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |