# Engine: Radiance

Author: Paul-Elie Pipelin

Home: https://github.com/ppipelin/radiance

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4 | 2026-04-23 | 1708<sub>(+30) | 2067<sub>(+109) | 2206<sub>(+104) |  |
| 4.3 | 2026-03-25 | 1678<sub>(+90) | 1958<sub>(+106) | 2102<sub>(+203) |  |
| 4.2 | 2026-01-17 | 1588 | 1852 | 1899 |  |
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

Generated: 2026-09-25 04:41:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4"]
  y-axis "Elo Rating" 1500 --> 2300
  line "" [1588, 1678, 1708]
  line "STC (8.0+0.08s)" [1588, 1678, 1708]
  line "LTC (60.0+0.60s)" [1852, 1958, 2067]
  line "" [1899, 2102, 2206]
  line "VLTC (2m24s+1.12s)" [1899, 2102, 2206]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2206 | 28 | 444 | 50% | 2199 | 21% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2067 | 26 | 506 | 51% | 2056 | 22% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 1708 | 26 | 574 | 48% | 1719 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2102 | 30 | 412 | 54% | 2061 | 18% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 1958 | 31 | 362 | 49% | 1967 | 23% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 1678 | 32 | 360 | 49% | 1686 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1899 | 36 | 304 | 45% | 1993 | 19% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 1852 | 39 | 246 | 47% | 1909 | 18% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 1588 | 34 | 328 | 45% | 1666 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |