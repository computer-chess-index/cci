# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2032<sub>(-2) | 2244<sub>(-77) | 2385<sub>(-48) |  |
| 1.2.0 | 2025-12-31 | 2034<sub>(+195) | 2321<sub>(+170) | 2433<sub>(+235) |  |
| 1.1.8 | 2025-12-16 | 1839<sub>(-11) | 2151<sub>(+45) | 2198<sub>(+41) |  |
| 1.1.7 | 2025-12-07 | 1850<sub>(+53) | 2106<sub>(-46) | 2157<sub>(-6) |  |
| 1.1.6 | 2025-11-30 | 1797 | 2152 | 2163 |  |
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

Generated: 2026-09-25 04:42:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1700 --> 2500
  line "" [1797, 1850, 1839, 2034, 2032]
  line "STC (8.0+0.08s)" [1797, 1850, 1839, 2034, 2032]
  line "LTC (60.0+0.60s)" [2152, 2106, 2151, 2321, 2244]
  line "" [2163, 2157, 2198, 2433, 2385]
  line "VLTC (2m24s+1.12s)" [2163, 2157, 2198, 2433, 2385]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2385 | 28 | 444 | 51% | 2377 | 26% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2244 | 28 | 468 | 49% | 2248 | 22% |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2032 | 26 | 524 | 50% | 2020 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2433 | 26 | 516 | 54% | 2399 | 23% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2321 | 27 | 460 | 50% | 2322 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2034 | 26 | 502 | 50% | 2036 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | 2198 | 45 | 180 | 47% | 2226 | 19% |
| 1.1.8 | LTC <sub>(60.0+0.60s)</sub> | 2151 | 42 | 192 | 50% | 2151 | 28% |
| 1.1.8 | STC <sub>(8.0+0.08s)</sub> | 1839 | 47 | 164 | 48% | 1858 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2157 | 46 | 160 | 52% | 2145 | 28% |
| 1.1.7 | LTC <sub>(60.0+0.60s)</sub> | 2106 | 46 | 160 | 53% | 2078 | 26% |
| 1.1.7 | STC <sub>(8.0+0.08s)</sub> | 1850 | 50 | 140 | 55% | 1794 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2163 | 50 | 152 | 43% | 2250 | 18% |
| 1.1.6 | LTC <sub>(60.0+0.60s)</sub> | 2152 | 46 | 168 | 46% | 2194 | 24% |
| 1.1.6 | STC <sub>(8.0+0.08s)</sub> | 1797 | 60 | 104 | 48% | 1831 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |