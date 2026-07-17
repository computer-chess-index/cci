# Engine: Catalyst

Author: Anany Tanwar

Home: https://github.com/AnanyTanwar/Catalyst

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1.0 | 2026-07-07 |  |  |  |  |
| 3.0.0 | 2026-04-23 | 2649<sub>(+85) | 3067<sub>(+128) | 3119<sub>(+79) |  |
| 2.2.0 | 2026-04-03 | 2564<sub>(-17) | 2939<sub>(+31) | 3040<sub>(+136) |  |
| 2.1.0 | 2026-04-02 | 2581<sub>(+5) | 2908<sub>(-28) | 2904<sub>(-67) |  |
| 2.0.0 | 2026-03-29 | 2576<sub>(+277) | 2936<sub>(+182) | 2971<sub>(+108) |  |
| 1.0.0 | 2026-03-26 | 2299 | 2754 | 2863 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Catalyst+<version>&body=###%20Engine%20name%0ACatalyst%0A%0A###%20Version%0A3.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-17 06:23:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2200 --> 3200
  line "STC (8.0+0.08s)" [2299, 2576, 2581, 2564, 2649]
  line "STC (8.0+0.08s)" [2299, 2576, 2581, 2564, 2649]
  line "LTC (60.0+0.60s)" [2754, 2936, 2908, 2939, 3067]
  line "VLTC (2m24s+1.12s)" [2863, 2971, 2904, 3040, 3119]
  line "VLTC (2m24s+1.12s)" [2863, 2971, 2904, 3040, 3119]
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
  x-axis ["1.0.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0"]
  y-axis "Elo Rating" 2200 --> 3200
  line "STC (8.0+0.08s)" [2299, 2576, 2581, 2564, 2649]
  line "STC (8.0+0.08s)" [2299, 2576, 2581, 2564, 2649]
  line "LTC (60.0+0.60s)" [2754, 2936, 2908, 2939, 3067]
  line "VLTC (2m24s+1.12s)" [2863, 2971, 2904, 3040, 3119]
  line "VLTC (2m24s+1.12s)" [2863, 2971, 2904, 3040, 3119]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3119 | 38 | 202 | 48% | 3137 | 49% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3067 | 43 | 150 | 51% | 3063 | 52% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2649 | 50 | 128 | 50% | 2650 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3040 | 34 | 242 | 51% | 3035 | 56% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2939 | 35 | 238 | 50% | 2934 | 51% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2564 | 34 | 274 | 50% | 2564 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2904 | 31 | 292 | 49% | 2915 | 52% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2908 | 34 | 248 | 49% | 2912 | 50% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2581 | 35 | 256 | 48% | 2595 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2971 | 31 | 288 | 49% | 2978 | 54% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2936 | 32 | 280 | 51% | 2928 | 49% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2576 | 30 | 336 | 48% | 2591 | 39% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2863 | 32 | 302 | 49% | 2873 | 41% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2754 | 34 | 268 | 48% | 2772 | 39% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2299 | 35 | 272 | 46% | 2336 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |