# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2020<sub>(-2) | 2215<sub>(-94) | 2369<sub>(-52) |  |
| 1.2.0 | 2025-12-31 | 2022<sub>(+195) | 2309<sub>(+172) | 2421<sub>(+235) |  |
| 1.1.8 | 2025-12-16 | 1827<sub>(-10) | 2137<sub>(+44) | 2186<sub>(+42) |  |
| 1.1.7 | 2025-12-07 | 1837<sub>(+52) | 2093<sub>(-45) | 2144<sub>(-7) |  |
| 1.1.6 | 2025-11-30 | 1785 | 2138 | 2151 |  |
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

Generated: 2026-07-15 06:29:33

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1700 --> 2500
  line "STC (8.0+0.08s)" [1785, 1837, 1827, 2022, 2020]
  line "STC (8.0+0.08s)" [1785, 1837, 1827, 2022, 2020]
  line "LTC (60.0+0.60s)" [2138, 2093, 2137, 2309, 2215]
  line "VLTC (2m24s+1.12s)" [2151, 2144, 2186, 2421, 2369]
  line "VLTC (2m24s+1.12s)" [2151, 2144, 2186, 2421, 2369]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1700 --> 2500
  line "STC (8.0+0.08s)" [1785, 1837, 1827, 2022, 2020]
  line "STC (8.0+0.08s)" [1785, 1837, 1827, 2022, 2020]
  line "LTC (60.0+0.60s)" [2138, 2093, 2137, 2309, 2215]
  line "VLTC (2m24s+1.12s)" [2151, 2144, 2186, 2421, 2369]
  line "VLTC (2m24s+1.12s)" [2151, 2144, 2186, 2421, 2369]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2369 | 30 | 364 | 51% | 2358 | 28% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2215 | 30 | 408 | 48% | 2234 | 22% |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2020 | 29 | 424 | 50% | 2020 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2421 | 26 | 516 | 54% | 2387 | 23% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2309 | 27 | 460 | 50% | 2310 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2022 | 26 | 502 | 50% | 2022 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | 2186 | 45 | 180 | 47% | 2214 | 19% |
| 1.1.8 | LTC <sub>(60.0+0.60s)</sub> | 2137 | 42 | 192 | 50% | 2137 | 28% |
| 1.1.8 | STC <sub>(8.0+0.08s)</sub> | 1827 | 47 | 164 | 48% | 1847 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2144 | 46 | 160 | 52% | 2132 | 28% |
| 1.1.7 | LTC <sub>(60.0+0.60s)</sub> | 2093 | 46 | 160 | 53% | 2064 | 26% |
| 1.1.7 | STC <sub>(8.0+0.08s)</sub> | 1837 | 50 | 140 | 55% | 1783 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2151 | 50 | 152 | 43% | 2237 | 18% |
| 1.1.6 | LTC <sub>(60.0+0.60s)</sub> | 2138 | 46 | 168 | 46% | 2180 | 24% |
| 1.1.6 | STC <sub>(8.0+0.08s)</sub> | 1785 | 60 | 104 | 48% | 1817 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |