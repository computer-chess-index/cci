# Engine: Igel

Author: Volodymyr Shcherbyna

Home: https://github.com/vshcherbyna/igel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.0 | 2024-12-28 | 3168<sub>(+14) | 3397<sub>(+4) | 3449<sub>(+19) |  |
| 3.5.0 | 2023-06-22 | 3154 | 3393 | 3430 |  |
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

Generated: 2026-08-17 06:26:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.5.0", "3.6.0"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3154, 3168]
  line "STC (8.0+0.08s)" [3154, 3168]
  line "LTC (60.0+0.60s)" [3393, 3397]
  line "VLTC (2m24s+1.12s)" [3430, 3449]
  line "VLTC (2m24s+1.12s)" [3430, 3449]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3449 | 12 | 1662 | 50% | 3451 | 82% |
| 3.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3397 | 12 | 1612 | 50% | 3394 | 76% |
| 3.6.0 | STC <sub>(8.0+0.08s)</sub> | 3168 | 13 | 1696 | 49% | 3178 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3430 | 17 | 800 | 50% | 3426 | 78% |
| 3.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3393 | 17 | 828 | 49% | 3397 | 78% |
| 3.5.0 | STC <sub>(8.0+0.08s)</sub> | 3154 | 18 | 872 | 52% | 3113 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |