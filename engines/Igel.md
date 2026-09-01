# Engine: Igel

Author: Volodymyr Shcherbyna

Home: https://github.com/vshcherbyna/igel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-08-27 | 3285<sub>(+103) | 3482<sub>(+72) | 3517<sub>(+56) |  |
| 3.6.0 | 2024-12-28 | 3182<sub>(+16) | 3410<sub>(+4) | 3461<sub>(+18) |  |
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

Generated: 2026-09-01 04:35:48

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.5.0", "3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "" [3166, 3182, 3285]
  line "STC (8.0+0.08s)" [3166, 3182, 3285]
  line "LTC (60.0+0.60s)" [3406, 3410, 3482]
  line "" [3443, 3461, 3517]
  line "VLTC (2m24s+1.12s)" [3443, 3461, 3517]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3517 | 36 | 176 | 51% | 3506 | 86% |
| 3.7.0 | LTC <sub>(60.0+0.60s)</sub> | 3482 | 36 | 180 | 49% | 3488 | 86% |
| 3.7.0 | STC <sub>(8.0+0.08s)</sub> | 3285 | 39 | 164 | 49% | 3290 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3461 | 12 | 1674 | 50% | 3464 | 82% |
| 3.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3410 | 12 | 1616 | 50% | 3407 | 76% |
| 3.6.0 | STC <sub>(8.0+0.08s)</sub> | 3182 | 12 | 1708 | 49% | 3190 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3443 | 17 | 800 | 50% | 3440 | 78% |
| 3.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3406 | 17 | 828 | 49% | 3409 | 78% |
| 3.5.0 | STC <sub>(8.0+0.08s)</sub> | 3166 | 18 | 872 | 52% | 3127 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |