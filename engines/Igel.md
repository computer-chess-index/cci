# Engine: Igel

Author: Volodymyr Shcherbyna

Home: https://github.com/vshcherbyna/igel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.0 | 2024-12-28 | 3178<sub>(+16) | 3406<sub>(+4) | 3457<sub>(+19) |  |
| 3.5.0 | 2023-06-22 | 3162 | 3402 | 3438 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Igel+<version>&body=###%20Engine%20name%0AIgel%0A%0A###%20Version%0A3.6.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-25 06:26:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.5.0", "3.6.0"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3162, 3178]
  line "STC (8.0+0.08s)" [3162, 3178]
  line "LTC (60.0+0.60s)" [3402, 3406]
  line "VLTC (2m24s+1.12s)" [3438, 3457]
  line "VLTC (2m24s+1.12s)" [3438, 3457]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3457 | 12 | 1670 | 50% | 3460 | 82% |
| 3.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3406 | 12 | 1616 | 50% | 3403 | 76% |
| 3.6.0 | STC <sub>(8.0+0.08s)</sub> | 3178 | 12 | 1708 | 49% | 3186 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3438 | 17 | 800 | 50% | 3436 | 78% |
| 3.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3402 | 17 | 828 | 49% | 3405 | 78% |
| 3.5.0 | STC <sub>(8.0+0.08s)</sub> | 3162 | 18 | 872 | 52% | 3123 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |