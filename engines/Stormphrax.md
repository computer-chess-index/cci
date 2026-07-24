# Engine: Stormphrax

Author: Ciekce

Home: https://github.com/Ciekce/Stormphrax

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3387<sub>(+48) | 3530<sub>(+25) | 3565<sub>(+23) |  |
| 7.0.0 | 2025-06-24 | 3339<sub>(+52) | 3505<sub>(+41) | 3542<sub>(+48) |  |
| 6.0.0 | 2024-10-29 | 3287<sub>(+97) | 3464<sub>(+75) | 3494<sub>(+69) |  |
| 5.0.0 | 2024-06-26 | 3190<sub>(+new) | 3389<sub>(+new) | 3425<sub>(+new) |  |
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

Generated: 2026-07-24 06:30:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0.0", "6.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "STC (8.0+0.08s)" [3190, 3287, 3339, 3387]
  line "STC (8.0+0.08s)" [3190, 3287, 3339, 3387]
  line "LTC (60.0+0.60s)" [3389, 3464, 3505, 3530]
  line "VLTC (2m24s+1.12s)" [3425, 3494, 3542, 3565]
  line "VLTC (2m24s+1.12s)" [3425, 3494, 3542, 3565]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3565 | 34 | 194 | 49% | 3568 | 93% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3530 | 33 | 204 | 50% | 3530 | 88% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3387 | 33 | 224 | 49% | 3394 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3542 | 18 | 722 | 51% | 3538 | 87% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3505 | 17 | 824 | 51% | 3501 | 87% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3339 | 17 | 930 | 51% | 3332 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3494 | 14 | 1184 | 50% | 3492 | 82% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3464 | 14 | 1228 | 50% | 3467 | 80% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3287 | 15 | 1188 | 50% | 3285 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3425 | 32 | 248 | 51% | 3418 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3389 | 27 | 340 | 54% | 3356 | 71% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3190 | 29 | 332 | 48% | 3206 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |