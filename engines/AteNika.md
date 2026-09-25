# Engine: AteNika

Author: Yevhenii Sekhin

Home: https://github.com/LesterEvSe/AteNika

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2026-09-20 | 2739<sub>(+61) | 3071<sub>(+62) | 3136<sub>(+55) |  |
| 0.6.0 | 2026-09-13 | 2678<sub>(+635) | 3009<sub>(+690) | 3081<sub>(+728) |  |
| 0.5.0 | 2026-09-02 | 2043<sub>(+142) | 2319<sub>(+186) | 2353<sub>(+125) |  |
| 0.4.0 | 2026-08-30 | 1901 | 2133 | 2228 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+AteNika+<version>&body=###%20Engine%20name%0AAteNika%0A%0A###%20Version%0A0.7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-25 04:36:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.5.0", "0.6.0", "0.7.0"]
  y-axis "Elo Rating" 1900 --> 3200
  line "" [1901, 2043, 2678, 2739]
  line "STC (8.0+0.08s)" [1901, 2043, 2678, 2739]
  line "LTC (60.0+0.60s)" [2133, 2319, 3009, 3071]
  line "" [2228, 2353, 3081, 3136]
  line "VLTC (2m24s+1.12s)" [2228, 2353, 3081, 3136]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3136 | 54 | 96 | 46% | 3170 | 55% |
| 0.7.0 | LTC <sub>(60.0+0.60s)</sub> | 3071 | 43 | 150 | 51% | 3062 | 55% |
| 0.7.0 | STC <sub>(8.0+0.08s)</sub> | 2739 | 54 | 106 | 53% | 2714 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3081 | 36 | 230 | 55% | 3032 | 48% |
| 0.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3009 | 36 | 222 | 53% | 2977 | 52% |
| 0.6.0 | STC <sub>(8.0+0.08s)</sub> | 2678 | 45 | 158 | 53% | 2642 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2353 | 36 | 262 | 50% | 2356 | 26% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2319 | 42 | 202 | 52% | 2300 | 21% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 2043 | 36 | 270 | 49% | 2059 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2228 | 38 | 248 | 48% | 2249 | 23% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2133 | 40 | 230 | 50% | 2137 | 15% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 1901 | 38 | 248 | 50% | 1899 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |