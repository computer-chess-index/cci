# Engine: Igel

Author: Volodymyr Shcherbyna

Home: https://github.com/vshcherbyna/igel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.0 | 2024-12-28 | 3167<sub>(+15) | 3395<sub>(+2) | 3448<sub>(+19) |  |
| 3.5.0 | 2023-06-22 | 3152 | 3393 | 3429 |  |
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

Generated: 2026-08-06 08:27:02

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.5.0", "3.6.0"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3152, 3167]
  line "STC (8.0+0.08s)" [3152, 3167]
  line "LTC (60.0+0.60s)" [3393, 3395]
  line "VLTC (2m24s+1.12s)" [3429, 3448]
  line "VLTC (2m24s+1.12s)" [3429, 3448]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3448 | 12 | 1654 | 50% | 3449 | 82% |
| 3.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3395 | 12 | 1596 | 50% | 3394 | 76% |
| 3.6.0 | STC <sub>(8.0+0.08s)</sub> | 3167 | 13 | 1680 | 49% | 3178 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3429 | 17 | 800 | 50% | 3426 | 78% |
| 3.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3393 | 17 | 828 | 49% | 3395 | 78% |
| 3.5.0 | STC <sub>(8.0+0.08s)</sub> | 3152 | 18 | 872 | 52% | 3113 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |