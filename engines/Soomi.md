# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2025<sub>(-3) | 2226<sub>(-85) | 2360<sub>(-62) |  |
| 1.2.0 | 2025-12-31 | 2028<sub>(+195) | 2311<sub>(+170) | 2422<sub>(+234) |  |
| 1.1.8 | 2025-12-16 | 1833<sub>(-11) | 2141<sub>(+43) | 2188<sub>(+40) |  |
| 1.1.7 | 2025-12-07 | 1844<sub>(+53) | 2098<sub>(-43) | 2148<sub>(-7) |  |
| 1.1.6 | 2025-11-30 | 1791 | 2141 | 2155 |  |
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

Generated: 2026-05-20 06:29:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1700 --> 2500
  line "STC (8.0+0.08s)" [1791, 1844, 1833, 2028, 2025]
  line "STC (8.0+0.08s)" [1791, 1844, 1833, 2028, 2025]
  line "LTC (60.0+0.60s)" [2141, 2098, 2141, 2311, 2226]
  line "VLTC (2m24s+1.12s)" [2155, 2148, 2188, 2422, 2360]
  line "VLTC (2m24s+1.12s)" [2155, 2148, 2188, 2422, 2360]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2360 | 33 | 304 | 50% | 2360 | 28% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2226 | 32 | 348 | 49% | 2222 | 21% |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2025 | 31 | 364 | 50% | 2022 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2422 | 26 | 516 | 54% | 2388 | 23% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2311 | 27 | 460 | 50% | 2313 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2028 | 26 | 502 | 50% | 2028 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | 2188 | 45 | 180 | 47% | 2218 | 19% |
| 1.1.8 | LTC <sub>(60.0+0.60s)</sub> | 2141 | 42 | 192 | 50% | 2141 | 28% |
| 1.1.8 | STC <sub>(8.0+0.08s)</sub> | 1833 | 47 | 164 | 48% | 1852 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2148 | 46 | 160 | 52% | 2136 | 28% |
| 1.1.7 | LTC <sub>(60.0+0.60s)</sub> | 2098 | 46 | 160 | 53% | 2068 | 26% |
| 1.1.7 | STC <sub>(8.0+0.08s)</sub> | 1844 | 50 | 140 | 55% | 1789 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2155 | 50 | 152 | 43% | 2241 | 18% |
| 1.1.6 | LTC <sub>(60.0+0.60s)</sub> | 2141 | 46 | 168 | 46% | 2184 | 24% |
| 1.1.6 | STC <sub>(8.0+0.08s)</sub> | 1791 | 60 | 104 | 48% | 1824 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |