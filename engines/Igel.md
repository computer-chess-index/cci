# Engine: Igel

Author: Volodymyr Shcherbyna

Home: https://github.com/vshcherbyna/igel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-08-27 | 3289<sub>(+108) | 3484<sub>(+74) | 3519<sub>(+58) |  |
| 3.6.0 | 2024-12-28 | 3181<sub>(+15) | 3410<sub>(+4) | 3461<sub>(+18) |  |
| 3.5.0 | 2023-06-22 | 3166 | 3406 | 3443 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Igel+<version>&body=###%20Engine%20name%0AIgel%0A%0A###%20Version%0A3.7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 04:35:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.5.0", "3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "" [3166, 3181, 3289]
  line "STC (8.0+0.08s)" [3166, 3181, 3289]
  line "LTC (60.0+0.60s)" [3406, 3410, 3484]
  line "" [3443, 3461, 3519]
  line "VLTC (2m24s+1.12s)" [3443, 3461, 3519]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3519 | 32 | 222 | 51% | 3513 | 86% |
| 3.7.0 | LTC <sub>(60.0+0.60s)</sub> | 3484 | 32 | 236 | 50% | 3487 | 81% |
| 3.7.0 | STC <sub>(8.0+0.08s)</sub> | 3289 | 35 | 204 | 50% | 3289 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3461 | 12 | 1674 | 50% | 3464 | 82% |
| 3.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3410 | 12 | 1616 | 50% | 3407 | 76% |
| 3.6.0 | STC <sub>(8.0+0.08s)</sub> | 3181 | 12 | 1708 | 49% | 3190 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3443 | 17 | 800 | 50% | 3440 | 78% |
| 3.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3406 | 17 | 828 | 49% | 3409 | 78% |
| 3.5.0 | STC <sub>(8.0+0.08s)</sub> | 3166 | 18 | 872 | 52% | 3125 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |