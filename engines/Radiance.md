# Engine: Radiance

Author: Paul-Elie Pipelin

Home: https://github.com/ppipelin/radiance

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4 | 2026-04-23 | 1708<sub>(+34) | 2066<sub>(+114) | 2203<sub>(+105) |  |
| 4.3 | 2026-03-25 | 1674<sub>(+90) | 1952<sub>(+104) | 2098<sub>(+203) |  |
| 4.2 | 2026-01-17 | 1584 | 1848 | 1895 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Radiance+<version>&body=###%20Engine%20name%0ARadiance%0A%0A###%20Version%0A4.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-31 04:38:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4"]
  y-axis "Elo Rating" 1500 --> 2300
  line "" [1584, 1674, 1708]
  line "STC (8.0+0.08s)" [1584, 1674, 1708]
  line "LTC (60.0+0.60s)" [1848, 1952, 2066]
  line "" [1895, 2098, 2203]
  line "VLTC (2m24s+1.12s)" [1895, 2098, 2203]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2203 | 29 | 416 | 50% | 2196 | 21% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2066 | 27 | 482 | 51% | 2049 | 22% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 1708 | 26 | 542 | 49% | 1715 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2098 | 30 | 412 | 54% | 2056 | 18% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 1952 | 31 | 362 | 49% | 1963 | 23% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 1674 | 32 | 360 | 49% | 1682 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1895 | 36 | 304 | 45% | 1987 | 19% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 1848 | 39 | 246 | 47% | 1905 | 18% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 1584 | 34 | 328 | 45% | 1661 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |