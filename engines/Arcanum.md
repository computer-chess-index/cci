# Engine: Arcanum

Author: Lars Aurud

Home: https://github.com/LarsAur/Arcanum

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.8 | 2026-05-16 | 2911<sub>(+8) | 3231<sub>(+25) | 3287<sub>(+20) |  |
| 2.7 | 2025-10-18 | 2903 | 3206 | 3267 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arcanum+<version>&body=###%20Engine%20name%0AArcanum%0A%0A###%20Version%0A2.8" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-16 04:35:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.7", "2.8"]
  y-axis "Elo Rating" 2900 --> 3300
  line "" [2903, 2911]
  line "STC (8.0+0.08s)" [2903, 2911]
  line "LTC (60.0+0.60s)" [3206, 3231]
  line "" [3267, 3287]
  line "VLTC (2m24s+1.12s)" [3267, 3287]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 3287 | 24 | 448 | 50% | 3290 | 66% |
| 2.8 | LTC <sub>(60.0+0.60s)</sub> | 3231 | 26 | 408 | 50% | 3228 | 57% |
| 2.8 | STC <sub>(8.0+0.08s)</sub> | 2911 | 25 | 500 | 49% | 2924 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 3267 | 27 | 394 | 54% | 3232 | 56% |
| 2.7 | LTC <sub>(60.0+0.60s)</sub> | 3206 | 26 | 424 | 50% | 3187 | 57% |
| 2.7 | STC <sub>(8.0+0.08s)</sub> | 2903 | 23 | 554 | 49% | 2901 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |