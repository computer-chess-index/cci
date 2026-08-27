# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2039<sub>(+9) | 2238<sub>(-77) | 2376<sub>(-51) |  |
| 1.2.0 | 2025-12-31 | 2030<sub>(+195) | 2315<sub>(+170) | 2427<sub>(+235) |  |
| 1.1.8 | 2025-12-16 | 1835<sub>(-10) | 2145<sub>(+44) | 2192<sub>(+40) |  |
| 1.1.7 | 2025-12-07 | 1845<sub>(+52) | 2101<sub>(-46) | 2152<sub>(-5) |  |
| 1.1.6 | 2025-11-30 | 1793 | 2147 | 2157 |  |
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

Generated: 2026-08-27 07:39:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1700 --> 2500
  line "" [1793, 1845, 1835, 2030, 2039]
  line "STC (8.0+0.08s)" [1793, 1845, 1835, 2030, 2039]
  line "LTC (60.0+0.60s)" [2147, 2101, 2145, 2315, 2238]
  line "" [2157, 2152, 2192, 2427, 2376]
  line "VLTC (2m24s+1.12s)" [2157, 2152, 2192, 2427, 2376]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2376 | 28 | 428 | 50% | 2371 | 26% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2238 | 28 | 444 | 49% | 2242 | 22% |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2039 | 27 | 480 | 51% | 2028 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2427 | 26 | 516 | 54% | 2392 | 23% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2315 | 27 | 460 | 50% | 2317 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2030 | 26 | 502 | 50% | 2030 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | 2192 | 45 | 180 | 47% | 2221 | 19% |
| 1.1.8 | LTC <sub>(60.0+0.60s)</sub> | 2145 | 42 | 192 | 50% | 2145 | 28% |
| 1.1.8 | STC <sub>(8.0+0.08s)</sub> | 1835 | 47 | 164 | 48% | 1854 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2152 | 46 | 160 | 52% | 2140 | 28% |
| 1.1.7 | LTC <sub>(60.0+0.60s)</sub> | 2101 | 46 | 160 | 53% | 2072 | 26% |
| 1.1.7 | STC <sub>(8.0+0.08s)</sub> | 1845 | 50 | 140 | 55% | 1790 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2157 | 50 | 152 | 43% | 2245 | 18% |
| 1.1.6 | LTC <sub>(60.0+0.60s)</sub> | 2147 | 46 | 168 | 46% | 2188 | 24% |
| 1.1.6 | STC <sub>(8.0+0.08s)</sub> | 1793 | 60 | 104 | 48% | 1827 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |