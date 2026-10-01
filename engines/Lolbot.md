# Engine: Lolbot

Author: Lorentz Vedeler

Home: https://github.com/loldot/lolbot

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.1 | 2026-04-13 | 2087<sub>(+59) | 2410<sub>(+168) | 2439<sub>(+120) |  |
| 0.2.3 | 2025-12-08 | 2028<sub>(+31) | 2242<sub>(-25) | 2319<sub>(+16) |  |
| 0.2.2 | 2025-11-29 | 1997<sub>(+64) | 2267<sub>(+80) | 2303<sub>(-20) |  |
| 0.2.1 | 2025-11-16 | 1933<sub>(-69) | 2187<sub>(-27) | 2323<sub>(-50) |  |
| 0.2 | 2025-11-15 | 2002 | 2214 | 2373 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lolbot+<version>&body=###%20Engine%20name%0ALolbot%0A%0A###%20Version%0A0.3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-01 04:40:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.2.2", "0.2.3", "0.3.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "" [2002, 1933, 1997, 2028, 2087]
  line "STC (8.0+0.08s)" [2002, 1933, 1997, 2028, 2087]
  line "LTC (60.0+0.60s)" [2214, 2187, 2267, 2242, 2410]
  line "" [2373, 2323, 2303, 2319, 2439]
  line "VLTC (2m24s+1.12s)" [2373, 2323, 2303, 2319, 2439]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2439 | 26 | 516 | 51% | 2421 | 24% |
| 0.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2410 | 26 | 530 | 53% | 2381 | 22% |
| 0.3.1 | STC <sub>(8.0+0.08s)</sub> | 2087 | 26 | 552 | 49% | 2084 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2319 | 31 | 362 | 48% | 2337 | 26% |
| 0.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2242 | 31 | 376 | 51% | 2226 | 22% |
| 0.2.3 | STC <sub>(8.0+0.08s)</sub> | 2028 | 28 | 468 | 49% | 2034 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2303 | 53 | 128 | 53% | 2273 | 20% |
| 0.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2267 | 66 | 76 | 51% | 2264 | 28% |
| 0.2.2 | STC <sub>(8.0+0.08s)</sub> | 1997 | 59 | 104 | 49% | 2010 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2323 | 55 | 132 | 44% | 2398 | 14% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2187 | 64 | 88 | 46% | 2226 | 17% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 1933 | 70 | 76 | 50% | 1933 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2373 | 56 | 116 | 52% | 2354 | 16% |
| 0.2 | LTC <sub>(60.0+0.60s)</sub> | 2214 | 47 | 160 | 49% | 2228 | 20% |
| 0.2 | STC <sub>(8.0+0.08s)</sub> | 2002 | 59 | 100 | 54% | 1962 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |