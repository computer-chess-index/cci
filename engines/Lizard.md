# Engine: Lizard

Author: Liam McGuire

Home: https://github.com/liamt19/Lizard

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.2 | 2025-01-08 | 3290<sub>(+15) | 3470<sub>(+22) | 3502<sub>(+10) |  |
| 11.1.5 | 2024-12-30 | 3275<sub>(+new) | 3448<sub>(+new) | 3492<sub>(+new) |  |
| 11.1 | 2024-11-11 |  |  |  |  |
| 11.0 | 2024-09-26 | 3220<sub>(+10) | 3432<sub>(-13) | 3479<sub>(-4) |  |
| 10.5 | 2024-07-13 | 3210<sub>(+new) | 3445<sub>(+new) | 3483<sub>(+new) |  |
| 10.4 | 2024-06-03 |  |  |  |  |
| 10.3 | 2024-03-09 |  |  |  |  |
| 10.2 | 2024-02-10 |  |  |  |  |
| 10.1 | 2024-01-13 |  |  |  |  |
| 10.0 | 2024-01-05 |  |  |  |  |
| 9.3.1 | 2023-12-30 |  |  |  |  |
| 9.3 | 2023-12-23 |  |  |  |  |
| 9.2 | 2023-11-06 |  |  |  |  |
| 9.1 | 2023-10-10 |  |  |  |  |
| 8.4 | 2023-09-18 |  |  |  |  |
| 6.2 | 2023-07-13 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lizard+<version>&body=###%20Engine%20name%0ALizard%0A%0A###%20Version%0A11.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-22 06:25:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10.5", "11.0", "11.1.5", "11.2"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3210, 3220, 3275, 3290]
  line "STC (8.0+0.08s)" [3210, 3220, 3275, 3290]
  line "LTC (60.0+0.60s)" [3445, 3432, 3448, 3470]
  line "VLTC (2m24s+1.12s)" [3483, 3479, 3492, 3502]
  line "VLTC (2m24s+1.12s)" [3483, 3479, 3492, 3502]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 12 | 1584 | 50% | 3505 | 87% |
| 11.2 | LTC <sub>(60.0+0.60s)</sub> | 3470 | 12 | 1584 | 50% | 3467 | 82% |
| 11.2 | STC <sub>(8.0+0.08s)</sub> | 3290 | 13 | 1568 | 51% | 3285 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3492 | 21 | 544 | 50% | 3490 | 85% |
| 11.1.5 | LTC <sub>(60.0+0.60s)</sub> | 3448 | 21 | 544 | 50% | 3449 | 83% |
| 11.1.5 | STC <sub>(8.0+0.08s)</sub> | 3275 | 22 | 552 | 49% | 3282 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3479 | 18 | 760 | 50% | 3478 | 81% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3432 | 18 | 768 | 49% | 3440 | 80% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3220 | 18 | 816 | 49% | 3224 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3483 | 31 | 252 | 52% | 3429 | 77% |
| 10.5 | LTC <sub>(60.0+0.60s)</sub> | 3445 | 35 | 192 | 50% | 3443 | 83% |
| 10.5 | STC <sub>(8.0+0.08s)</sub> | 3210 | 31 | 272 | 48% | 3221 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |