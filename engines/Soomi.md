# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2034<sub>(+2) | 2240<sub>(-77) | 2379<sub>(-50) |  |
| 1.2.0 | 2025-12-31 | 2032<sub>(+197) | 2317<sub>(+170) | 2429<sub>(+235) |  |
| 1.1.8 | 2025-12-16 | 1835<sub>(-10) | 2147<sub>(+45) | 2194<sub>(+41) |  |
| 1.1.7 | 2025-12-07 | 1845<sub>(+51) | 2102<sub>(-46) | 2153<sub>(-7) |  |
| 1.1.6 | 2025-11-30 | 1794 | 2148 | 2160 |  |
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

Generated: 2026-09-06 06:28:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1700 --> 2500
  line "" [1794, 1845, 1835, 2032, 2034]
  line "STC (8.0+0.08s)" [1794, 1845, 1835, 2032, 2034]
  line "LTC (60.0+0.60s)" [2148, 2102, 2147, 2317, 2240]
  line "" [2160, 2153, 2194, 2429, 2379]
  line "VLTC (2m24s+1.12s)" [2160, 2153, 2194, 2429, 2379]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2379 | 28 | 432 | 50% | 2373 | 26% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2240 | 28 | 456 | 49% | 2242 | 22% |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2034 | 26 | 508 | 50% | 2029 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2429 | 26 | 516 | 54% | 2395 | 23% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2317 | 27 | 460 | 50% | 2319 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2032 | 26 | 502 | 50% | 2032 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | 2194 | 45 | 180 | 47% | 2222 | 19% |
| 1.1.8 | LTC <sub>(60.0+0.60s)</sub> | 2147 | 42 | 192 | 50% | 2147 | 28% |
| 1.1.8 | STC <sub>(8.0+0.08s)</sub> | 1835 | 47 | 164 | 48% | 1855 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2153 | 46 | 160 | 52% | 2141 | 28% |
| 1.1.7 | LTC <sub>(60.0+0.60s)</sub> | 2102 | 46 | 160 | 53% | 2074 | 26% |
| 1.1.7 | STC <sub>(8.0+0.08s)</sub> | 1845 | 50 | 140 | 55% | 1791 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2160 | 50 | 152 | 43% | 2246 | 18% |
| 1.1.6 | LTC <sub>(60.0+0.60s)</sub> | 2148 | 46 | 168 | 46% | 2190 | 24% |
| 1.1.6 | STC <sub>(8.0+0.08s)</sub> | 1794 | 60 | 104 | 48% | 1827 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |