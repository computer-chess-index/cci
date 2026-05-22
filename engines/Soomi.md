# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2028<sub>(+2) | 2229<sub>(-82) | 2372<sub>(-51) |  |
| 1.2.0 | 2025-12-31 | 2026<sub>(+194) | 2311<sub>(+170) | 2423<sub>(+235) |  |
| 1.1.8 | 2025-12-16 | 1832<sub>(-11) | 2141<sub>(+44) | 2188<sub>(+40) |  |
| 1.1.7 | 2025-12-07 | 1843<sub>(+53) | 2097<sub>(-45) | 2148<sub>(-7) |  |
| 1.1.6 | 2025-11-30 | 1790 | 2142 | 2155 |  |
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

Generated: 2026-05-22 15:05:04

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1700 --> 2500
  line "STC (8.0+0.08s)" [1790, 1843, 1832, 2026, 2028]
  line "STC (8.0+0.08s)" [1790, 1843, 1832, 2026, 2028]
  line "LTC (60.0+0.60s)" [2142, 2097, 2141, 2311, 2229]
  line "VLTC (2m24s+1.12s)" [2155, 2148, 2188, 2423, 2372]
  line "VLTC (2m24s+1.12s)" [2155, 2148, 2188, 2423, 2372]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2372 | 33 | 316 | 51% | 2361 | 28% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2229 | 32 | 352 | 50% | 2222 | 21% |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2028 | 31 | 376 | 50% | 2021 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2423 | 26 | 516 | 54% | 2390 | 23% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2311 | 27 | 460 | 50% | 2314 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2026 | 26 | 502 | 50% | 2026 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | 2188 | 45 | 180 | 47% | 2218 | 19% |
| 1.1.8 | LTC <sub>(60.0+0.60s)</sub> | 2141 | 42 | 192 | 50% | 2141 | 28% |
| 1.1.8 | STC <sub>(8.0+0.08s)</sub> | 1832 | 47 | 164 | 48% | 1852 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2148 | 46 | 160 | 52% | 2136 | 28% |
| 1.1.7 | LTC <sub>(60.0+0.60s)</sub> | 2097 | 46 | 160 | 53% | 2068 | 26% |
| 1.1.7 | STC <sub>(8.0+0.08s)</sub> | 1843 | 50 | 140 | 55% | 1789 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2155 | 50 | 152 | 43% | 2241 | 18% |
| 1.1.6 | LTC <sub>(60.0+0.60s)</sub> | 2142 | 46 | 168 | 46% | 2184 | 24% |
| 1.1.6 | STC <sub>(8.0+0.08s)</sub> | 1790 | 60 | 104 | 48% | 1823 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |