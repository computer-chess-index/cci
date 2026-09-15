# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2029<sub>(-3) | 2241<sub>(-77) | 2380<sub>(-50) |  |
| 1.2.0 | 2025-12-31 | 2032<sub>(+197) | 2318<sub>(+170) | 2430<sub>(+235) |  |
| 1.1.8 | 2025-12-16 | 1835<sub>(-12) | 2148<sub>(+45) | 2195<sub>(+40) |  |
| 1.1.7 | 2025-12-07 | 1847<sub>(+53) | 2103<sub>(-46) | 2155<sub>(-5) |  |
| 1.1.6 | 2025-11-30 | 1794 | 2149 | 2160 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Soomi+<version>&body=###%20Engine%20name%0ASoomi%0A%0A###%20Version%0A1.2.0B" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-15 04:42:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1700 --> 2500
  line "" [1794, 1847, 1835, 2032, 2029]
  line "STC (8.0+0.08s)" [1794, 1847, 1835, 2032, 2029]
  line "LTC (60.0+0.60s)" [2149, 2103, 2148, 2318, 2241]
  line "" [2160, 2155, 2195, 2430, 2380]
  line "VLTC (2m24s+1.12s)" [2160, 2155, 2195, 2430, 2380]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2380 | 28 | 440 | 50% | 2375 | 26% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2241 | 28 | 468 | 49% | 2245 | 22% |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2029 | 26 | 520 | 49% | 2030 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2430 | 26 | 516 | 54% | 2396 | 23% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2318 | 27 | 460 | 50% | 2319 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2032 | 26 | 502 | 50% | 2033 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | 2195 | 45 | 180 | 47% | 2223 | 19% |
| 1.1.8 | LTC <sub>(60.0+0.60s)</sub> | 2148 | 42 | 192 | 50% | 2148 | 28% |
| 1.1.8 | STC <sub>(8.0+0.08s)</sub> | 1835 | 47 | 164 | 48% | 1855 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2155 | 46 | 160 | 52% | 2142 | 28% |
| 1.1.7 | LTC <sub>(60.0+0.60s)</sub> | 2103 | 46 | 160 | 53% | 2075 | 26% |
| 1.1.7 | STC <sub>(8.0+0.08s)</sub> | 1847 | 50 | 140 | 55% | 1791 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2160 | 50 | 152 | 43% | 2248 | 18% |
| 1.1.6 | LTC <sub>(60.0+0.60s)</sub> | 2149 | 46 | 168 | 46% | 2191 | 24% |
| 1.1.6 | STC <sub>(8.0+0.08s)</sub> | 1794 | 60 | 104 | 48% | 1828 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |