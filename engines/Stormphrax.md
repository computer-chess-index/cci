# Engine: Stormphrax

Author: Ciekce

Home: https://github.com/Ciekce/Stormphrax

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3379<sub>(+40) | 3534<sub>(+31) | 3569<sub>(+28) |  |
| 7.0.0 | 2025-06-24 | 3339<sub>(+53) | 3503<sub>(+39) | 3541<sub>(+47) |  |
| 6.0.0 | 2024-10-29 | 3286<sub>(+97) | 3464<sub>(+77) | 3494<sub>(+69) |  |
| 5.0.0 | 2024-06-26 | 3189<sub>(+new) | 3387<sub>(+new) | 3425<sub>(+new) |  |
| 4.1.0 | 2024-03-11 |  |  |  |  |
| 4.0.0 | 2023-12-17 |  |  |  |  |
| 3.0.0 | 2023-11-02 |  |  |  |  |
| 2.0.0 | 2023-09-24 |  |  |  |  |
| 1.0.0 | 2023-07-25 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Stormphrax+<version>&body=###%20Engine%20name%0AStormphrax%0A%0A###%20Version%0A8.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-04 06:33:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0.0", "6.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "STC (8.0+0.08s)" [3189, 3286, 3339, 3379]
  line "STC (8.0+0.08s)" [3189, 3286, 3339, 3379]
  line "LTC (60.0+0.60s)" [3387, 3464, 3503, 3534]
  line "VLTC (2m24s+1.12s)" [3425, 3494, 3541, 3569]
  line "VLTC (2m24s+1.12s)" [3425, 3494, 3541, 3569]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3569 | 30 | 254 | 51% | 3561 | 90% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3534 | 28 | 292 | 51% | 3532 | 90% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3379 | 29 | 304 | 49% | 3387 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 18 | 722 | 51% | 3538 | 87% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3503 | 17 | 824 | 51% | 3499 | 87% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3339 | 17 | 930 | 51% | 3330 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3494 | 14 | 1184 | 50% | 3492 | 82% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3464 | 14 | 1228 | 50% | 3465 | 80% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3286 | 15 | 1188 | 50% | 3285 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3425 | 32 | 248 | 51% | 3418 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3387 | 27 | 340 | 54% | 3355 | 71% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3189 | 29 | 332 | 48% | 3205 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |