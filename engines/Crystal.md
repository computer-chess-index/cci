# Engine: Crystal

Author: Joseph Ellis

Home: https://github.com/jhellis3/Stockfish

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3425<sub>(+49) | 3565<sub>(+47) | 3588<sub>(+48) |  |
| 5 | 2022-11-05 | 3376 | 3518 | 3540 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Crystal+<version>&body=###%20Engine%20name%0ACrystal%0A%0A###%20Version%0A9" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-24 06:24:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5", "9"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3376, 3425]
  line "STC (8.0+0.08s)" [3376, 3425]
  line "LTC (60.0+0.60s)" [3518, 3565]
  line "VLTC (2m24s+1.12s)" [3540, 3588]
  line "VLTC (2m24s+1.12s)" [3540, 3588]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 3588 | 34 | 200 | 53% | 3569 | 89% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 3565 | 21 | 528 | 51% | 3557 | 87% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 3425 | 19 | 710 | 51% | 3420 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3540 | 27 | 320 | 55% | 3497 | 85% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3518 | 12 | 1640 | 50% | 3519 | 86% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 3376 | 12 | 1796 | 52% | 3364 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |