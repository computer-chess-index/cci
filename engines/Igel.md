# Engine: Igel

Author: Volodymyr Shcherbyna

Home: https://github.com/vshcherbyna/igel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-08-27 | 3290<sub>(+111) | 3480<sub>(+71) | 3513<sub>(+53) |  |
| 3.6.0 | 2024-12-28 | 3179<sub>(+15) | 3409<sub>(+4) | 3460<sub>(+19) |  |
| 3.5.0 | 2023-06-22 | 3164 | 3405 | 3441 |  |
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

Generated: 2026-08-30 13:09:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.5.0", "3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "" [3164, 3179, 3290]
  line "STC (8.0+0.08s)" [3164, 3179, 3290]
  line "LTC (60.0+0.60s)" [3405, 3409, 3480]
  line "" [3441, 3460, 3513]
  line "VLTC (2m24s+1.12s)" [3441, 3460, 3513]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 38 | 156 | 52% | 3502 | 85% |
| 3.7.0 | LTC <sub>(60.0+0.60s)</sub> | 3480 | 38 | 160 | 49% | 3488 | 85% |
| 3.7.0 | STC <sub>(8.0+0.08s)</sub> | 3290 | 41 | 152 | 50% | 3291 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3460 | 12 | 1674 | 50% | 3461 | 82% |
| 3.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3409 | 12 | 1616 | 50% | 3406 | 76% |
| 3.6.0 | STC <sub>(8.0+0.08s)</sub> | 3179 | 12 | 1708 | 49% | 3189 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3441 | 17 | 800 | 50% | 3438 | 78% |
| 3.5.0 | LTC <sub>(60.0+0.60s)</sub> | 3405 | 17 | 828 | 49% | 3407 | 78% |
| 3.5.0 | STC <sub>(8.0+0.08s)</sub> | 3164 | 18 | 872 | 52% | 3124 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |