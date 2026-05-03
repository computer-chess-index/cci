# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2088<sub>(+16) | 2311<sub>(-54) | 2429<sub>(-48) |  |
| 1.2.0 | 2025-12-31 | 2072<sub>(+206) | 2365<sub>(+174) | 2477<sub>(+237) |  |
| 1.1.8 | 2025-12-16 | 1866<sub>(-8) | 2191<sub>(+49) | 2240<sub>(+45) |  |
| 1.1.7 | 2025-12-07 | 1874<sub>(+54) | 2142<sub>(-49) | 2195<sub>(-10) |  |
| 1.1.6 | 2025-11-30 | 1820 | 2191 | 2205 |  |
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

Generated: 2026-05-03 07:46:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1800 --> 2500
  line "STC (8.0+0.08s)" [1820, 1874, 1866, 2072, 2088]
  line "STC (8.0+0.08s)" [1820, 1874, 1866, 2072, 2088]
  line "LTC (60.0+0.60s)" [2191, 2142, 2191, 2365, 2311]
  line "VLTC (2m24s+1.12s)" [2205, 2195, 2240, 2477, 2429]
  line "VLTC (2m24s+1.12s)" [2205, 2195, 2240, 2477, 2429]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2429 | 36 | 252 | 49% | 2434 | 30% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2311 | 37 | 268 | 51% | 2296 | 20% |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2088 | 37 | 256 | 50% | 2093 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2477 | 26 | 516 | 54% | 2444 | 23% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2365 | 27 | 460 | 50% | 2367 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2072 | 26 | 502 | 50% | 2072 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | 2240 | 45 | 180 | 47% | 2269 | 19% |
| 1.1.8 | LTC <sub>(60.0+0.60s)</sub> | 2191 | 42 | 192 | 50% | 2191 | 28% |
| 1.1.8 | STC <sub>(8.0+0.08s)</sub> | 1866 | 47 | 164 | 48% | 1886 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2195 | 46 | 160 | 52% | 2184 | 28% |
| 1.1.7 | LTC <sub>(60.0+0.60s)</sub> | 2142 | 46 | 160 | 53% | 2113 | 26% |
| 1.1.7 | STC <sub>(8.0+0.08s)</sub> | 1874 | 50 | 140 | 55% | 1818 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2205 | 50 | 152 | 43% | 2292 | 18% |
| 1.1.6 | LTC <sub>(60.0+0.60s)</sub> | 2191 | 46 | 168 | 46% | 2233 | 24% |
| 1.1.6 | STC <sub>(8.0+0.08s)</sub> | 1820 | 60 | 104 | 48% | 1854 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |