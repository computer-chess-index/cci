# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2024<sub>(+3) | 2219<sub>(-87) | 2369<sub>(-49) |  |
| 1.2.0 | 2025-12-31 | 2021<sub>(+196) | 2306<sub>(+170) | 2418<sub>(+235) |  |
| 1.1.8 | 2025-12-16 | 1825<sub>(-11) | 2136<sub>(+45) | 2183<sub>(+41) |  |
| 1.1.7 | 2025-12-07 | 1836<sub>(+53) | 2091<sub>(-46) | 2142<sub>(-7) |  |
| 1.1.6 | 2025-11-30 | 1783 | 2137 | 2149 |  |
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

Generated: 2026-07-29 06:29:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1700 --> 2500
  line "STC (8.0+0.08s)" [1783, 1836, 1825, 2021, 2024]
  line "STC (8.0+0.08s)" [1783, 1836, 1825, 2021, 2024]
  line "LTC (60.0+0.60s)" [2137, 2091, 2136, 2306, 2219]
  line "VLTC (2m24s+1.12s)" [2149, 2142, 2183, 2418, 2369]
  line "VLTC (2m24s+1.12s)" [2149, 2142, 2183, 2418, 2369]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2369 | 29 | 404 | 51% | 2361 | 27% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2219 | 29 | 420 | 48% | 2233 | 23% |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2024 | 28 | 444 | 50% | 2017 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2418 | 26 | 516 | 54% | 2384 | 23% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2306 | 27 | 460 | 50% | 2309 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2021 | 26 | 502 | 50% | 2021 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | 2183 | 45 | 180 | 47% | 2213 | 19% |
| 1.1.8 | LTC <sub>(60.0+0.60s)</sub> | 2136 | 42 | 192 | 50% | 2136 | 28% |
| 1.1.8 | STC <sub>(8.0+0.08s)</sub> | 1825 | 47 | 164 | 48% | 1844 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2142 | 46 | 160 | 52% | 2130 | 28% |
| 1.1.7 | LTC <sub>(60.0+0.60s)</sub> | 2091 | 46 | 160 | 53% | 2063 | 26% |
| 1.1.7 | STC <sub>(8.0+0.08s)</sub> | 1836 | 50 | 140 | 55% | 1781 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2149 | 50 | 152 | 43% | 2236 | 18% |
| 1.1.6 | LTC <sub>(60.0+0.60s)</sub> | 2137 | 46 | 168 | 46% | 2179 | 24% |
| 1.1.6 | STC <sub>(8.0+0.08s)</sub> | 1783 | 60 | 104 | 48% | 1816 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |