# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2030<sub>(+4) | 2230<sub>(-81) | 2372<sub>(-50) |  |
| 1.2.0 | 2025-12-31 | 2026<sub>(+195) | 2311<sub>(+170) | 2422<sub>(+234) |  |
| 1.1.8 | 2025-12-16 | 1831<sub>(-10) | 2141<sub>(+44) | 2188<sub>(+40) |  |
| 1.1.7 | 2025-12-07 | 1841<sub>(+51) | 2097<sub>(-44) | 2148<sub>(-5) |  |
| 1.1.6 | 2025-11-30 | 1790 | 2141 | 2153 |  |
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

Generated: 2026-08-21 06:31:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1700 --> 2500
  line "STC (8.0+0.08s)" [1790, 1841, 1831, 2026, 2030]
  line "STC (8.0+0.08s)" [1790, 1841, 1831, 2026, 2030]
  line "LTC (60.0+0.60s)" [2141, 2097, 2141, 2311, 2230]
  line "VLTC (2m24s+1.12s)" [2153, 2148, 2188, 2422, 2372]
  line "VLTC (2m24s+1.12s)" [2153, 2148, 2188, 2422, 2372]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2372 | 28 | 428 | 50% | 2367 | 26% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2230 | 29 | 436 | 49% | 2238 | 22% |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2030 | 28 | 448 | 50% | 2024 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2422 | 26 | 516 | 54% | 2388 | 23% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2311 | 27 | 460 | 50% | 2313 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2026 | 26 | 502 | 50% | 2026 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | 2188 | 45 | 180 | 47% | 2217 | 19% |
| 1.1.8 | LTC <sub>(60.0+0.60s)</sub> | 2141 | 42 | 192 | 50% | 2141 | 28% |
| 1.1.8 | STC <sub>(8.0+0.08s)</sub> | 1831 | 47 | 164 | 48% | 1851 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2148 | 46 | 160 | 52% | 2136 | 28% |
| 1.1.7 | LTC <sub>(60.0+0.60s)</sub> | 2097 | 46 | 160 | 53% | 2067 | 26% |
| 1.1.7 | STC <sub>(8.0+0.08s)</sub> | 1841 | 50 | 140 | 55% | 1787 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2153 | 50 | 152 | 43% | 2241 | 18% |
| 1.1.6 | LTC <sub>(60.0+0.60s)</sub> | 2141 | 46 | 168 | 46% | 2184 | 24% |
| 1.1.6 | STC <sub>(8.0+0.08s)</sub> | 1790 | 60 | 104 | 48% | 1823 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |