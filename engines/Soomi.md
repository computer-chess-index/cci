# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2024<sub>(+3) | 2223<sub>(-83) | 2367<sub>(-50) |  |
| 1.2.0 | 2025-12-31 | 2021<sub>(+194) | 2306<sub>(+169) | 2417<sub>(+234) |  |
| 1.1.8 | 2025-12-16 | 1827<sub>(-10) | 2137<sub>(+44) | 2183<sub>(+41) |  |
| 1.1.7 | 2025-12-07 | 1837<sub>(+52) | 2093<sub>(-44) | 2142<sub>(-7) |  |
| 1.1.6 | 2025-11-30 | 1785 | 2137 | 2149 |  |
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

Generated: 2026-08-17 06:33:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1700 --> 2500
  line "STC (8.0+0.08s)" [1785, 1837, 1827, 2021, 2024]
  line "STC (8.0+0.08s)" [1785, 1837, 1827, 2021, 2024]
  line "LTC (60.0+0.60s)" [2137, 2093, 2137, 2306, 2223]
  line "VLTC (2m24s+1.12s)" [2149, 2142, 2183, 2417, 2367]
  line "VLTC (2m24s+1.12s)" [2149, 2142, 2183, 2417, 2367]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2367 | 28 | 424 | 50% | 2361 | 26% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2223 | 29 | 428 | 48% | 2233 | 22% |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2024 | 28 | 444 | 50% | 2018 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2417 | 26 | 516 | 54% | 2383 | 23% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2306 | 27 | 460 | 50% | 2307 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2021 | 26 | 502 | 50% | 2021 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | 2183 | 45 | 180 | 47% | 2213 | 19% |
| 1.1.8 | LTC <sub>(60.0+0.60s)</sub> | 2137 | 42 | 192 | 50% | 2137 | 28% |
| 1.1.8 | STC <sub>(8.0+0.08s)</sub> | 1827 | 47 | 164 | 48% | 1845 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2142 | 46 | 160 | 52% | 2130 | 28% |
| 1.1.7 | LTC <sub>(60.0+0.60s)</sub> | 2093 | 46 | 160 | 53% | 2063 | 26% |
| 1.1.7 | STC <sub>(8.0+0.08s)</sub> | 1837 | 50 | 140 | 55% | 1782 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2149 | 50 | 152 | 43% | 2236 | 18% |
| 1.1.6 | LTC <sub>(60.0+0.60s)</sub> | 2137 | 46 | 168 | 46% | 2179 | 24% |
| 1.1.6 | STC <sub>(8.0+0.08s)</sub> | 1785 | 60 | 104 | 48% | 1817 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |