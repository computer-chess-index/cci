# Engine: Stormphrax

Author: Ciekce

Home: https://github.com/Ciekce/Stormphrax

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3379<sub>(+39) | 3536<sub>(+30) | 3569<sub>(+25) |  |
| 7.0.0 | 2025-06-24 | 3340<sub>(+51) | 3506<sub>(+41) | 3544<sub>(+49) |  |
| 6.0.0 | 2024-10-29 | 3289<sub>(+98) | 3465<sub>(+75) | 3495<sub>(+69) |  |
| 5.0.0 | 2024-06-26 | 3191<sub>(+new) | 3390<sub>(+new) | 3426<sub>(+new) |  |
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

Generated: 2026-07-31 06:30:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0.0", "6.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "STC (8.0+0.08s)" [3191, 3289, 3340, 3379]
  line "STC (8.0+0.08s)" [3191, 3289, 3340, 3379]
  line "LTC (60.0+0.60s)" [3390, 3465, 3506, 3536]
  line "VLTC (2m24s+1.12s)" [3426, 3495, 3544, 3569]
  line "VLTC (2m24s+1.12s)" [3426, 3495, 3544, 3569]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3569 | 31 | 234 | 51% | 3565 | 91% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 29 | 268 | 50% | 3534 | 90% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3379 | 30 | 288 | 48% | 3391 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3544 | 18 | 722 | 51% | 3540 | 87% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3506 | 17 | 824 | 51% | 3502 | 87% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3340 | 17 | 930 | 51% | 3333 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3495 | 14 | 1184 | 50% | 3495 | 82% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3465 | 14 | 1228 | 50% | 3468 | 80% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3289 | 15 | 1188 | 50% | 3287 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3426 | 32 | 248 | 51% | 3420 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3390 | 27 | 340 | 54% | 3357 | 71% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3191 | 29 | 332 | 48% | 3208 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |