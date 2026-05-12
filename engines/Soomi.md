# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2093<sub>(+19) | 2302<sub>(-65) | 2427<sub>(-52) |  |
| 1.2.0 | 2025-12-31 | 2074<sub>(+207) | 2367<sub>(+175) | 2479<sub>(+237) |  |
| 1.1.8 | 2025-12-16 | 1867<sub>(-7) | 2192<sub>(+48) | 2242<sub>(+44) |  |
| 1.1.7 | 2025-12-07 | 1874<sub>(+53) | 2144<sub>(-48) | 2198<sub>(-8) |  |
| 1.1.6 | 2025-11-30 | 1821 | 2192 | 2206 |  |
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

Generated: 2026-05-12 06:29:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1800 --> 2500
  line "STC (8.0+0.08s)" [1821, 1874, 1867, 2074, 2093]
  line "STC (8.0+0.08s)" [1821, 1874, 1867, 2074, 2093]
  line "LTC (60.0+0.60s)" [2192, 2144, 2192, 2367, 2302]
  line "VLTC (2m24s+1.12s)" [2206, 2198, 2242, 2479, 2427]
  line "VLTC (2m24s+1.12s)" [2206, 2198, 2242, 2479, 2427]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2427 | 34 | 284 | 50% | 2427 | 29% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2302 | 34 | 308 | 51% | 2296 | 21% |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2093 | 34 | 308 | 51% | 2086 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2479 | 26 | 516 | 54% | 2445 | 23% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2367 | 27 | 460 | 50% | 2368 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2074 | 26 | 502 | 50% | 2074 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | 2242 | 45 | 180 | 47% | 2271 | 19% |
| 1.1.8 | LTC <sub>(60.0+0.60s)</sub> | 2192 | 42 | 192 | 50% | 2192 | 28% |
| 1.1.8 | STC <sub>(8.0+0.08s)</sub> | 1867 | 47 | 164 | 48% | 1887 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2198 | 46 | 160 | 52% | 2186 | 28% |
| 1.1.7 | LTC <sub>(60.0+0.60s)</sub> | 2144 | 46 | 160 | 53% | 2115 | 26% |
| 1.1.7 | STC <sub>(8.0+0.08s)</sub> | 1874 | 50 | 140 | 55% | 1820 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2206 | 50 | 152 | 43% | 2294 | 18% |
| 1.1.6 | LTC <sub>(60.0+0.60s)</sub> | 2192 | 46 | 168 | 46% | 2236 | 24% |
| 1.1.6 | STC <sub>(8.0+0.08s)</sub> | 1821 | 60 | 104 | 48% | 1855 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |