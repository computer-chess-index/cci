# Engine: Stormphrax

Author: Ciekce

Home: https://github.com/Ciekce/Stormphrax

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2025-06-24 | 3332<sub>(+50) | 3498<sub>(+41) | 3536<sub>(+48) |  |
| 6.0.0 | 2024-10-29 | 3282<sub>(+97) | 3457<sub>(+75) | 3488<sub>(+68) |  |
| 5.0.0 | 2024-06-26 | 3185<sub>(+new) | 3382<sub>(+new) | 3420<sub>(+new) |  |
| 4.1.0 | 2024-03-11 |  |  |  |  |
| 4.0.0 | 2023-12-17 |  |  |  |  |
| 3.0.0 | 2023-11-02 |  |  |  |  |
| 2.0.0 | 2023-09-24 |  |  |  |  |
| 1.0.0 | 2023-07-25 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Stormphrax+<version>&body=###%20Engine%20name%0AStormphrax%0A%0A###%20Version%0A7.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-08 06:28:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0.0", "6.0.0", "7.0.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "STC (8.0+0.08s)" [3185, 3282, 3332]
  line "STC (8.0+0.08s)" [3185, 3282, 3332]
  line "LTC (60.0+0.60s)" [3382, 3457, 3498]
  line "VLTC (2m24s+1.12s)" [3420, 3488, 3536]
  line "VLTC (2m24s+1.12s)" [3420, 3488, 3536]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3536 | 18 | 722 | 51% | 3532 | 87% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3498 | 17 | 824 | 51% | 3494 | 87% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3332 | 17 | 906 | 51% | 3326 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3488 | 14 | 1184 | 50% | 3487 | 82% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3457 | 14 | 1228 | 50% | 3460 | 80% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3282 | 15 | 1188 | 50% | 3281 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3420 | 32 | 248 | 51% | 3413 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3382 | 27 | 340 | 54% | 3351 | 71% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3185 | 29 | 332 | 48% | 3201 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |